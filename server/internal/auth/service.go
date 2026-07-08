package auth

import (
	"database/sql"
	"errors"
	"log"
)

type Service struct {
	Repo *Repository
}

func NewService(repo *Repository) *Service {
	return &Service{Repo: repo}
}

func (s *Service) Register(req RegisterRequest) (User, error) {

	if req.Email == "" || req.Password == "" || req.Name == "" {
		return User{}, errors.New("missing fields")
	}

	_, err := s.Repo.GetUserByEmail(req.Email)

	if err == nil {
		return User{}, errors.New("user already exists")
	}

	if err != nil && err != sql.ErrNoRows {
		return User{}, err
	}

	hash, err := HashPassword(req.Password)
	if err != nil {
		return User{}, err
	}

	user := User{
		Name:         req.Name,
		Email:        req.Email,
		PasswordHash: hash,
		Status:       "guest",
		Role:         "user",
	}

	err = s.Repo.CreateUser(&user)
	if err != nil {
		return User{}, err
	}

	user.PasswordHash = ""

	return user, nil
}

func (s *Service) Login(email, password string) (User, error) {

	user, err := s.Repo.GetUserByEmail(email)

	if err != nil {
		log.Println("LOGIN USER ERROR:", err)
		return User{}, errors.New("invalid email or password")
	}

	log.Println("FOUND USER:", user.Email)
	log.Println("HASH FROM DB:", user.PasswordHash)

	ok := CheckPasswordHash(password, user.PasswordHash)

	log.Println("PASSWORD OK:", ok)

	if !ok {
		return User{}, errors.New("invalid email or password")
	}

	return user, nil
}

func (s *Service) GetUserByID(id int) (User, error) {
	user, err := s.Repo.GetUserByID(id)
	if err != nil {
		return User{}, errors.New("user not found")
	}

	user.PasswordHash = ""

	return user, nil
}

func (s *Service) BuyMembership(userID int, plan string) error {
	user, err := s.Repo.GetUserByID(userID)
	if err != nil {
		return err
	}

	if user.Membership != nil {
		return errors.New("membership already exists")
	}

	switch plan {
	case "month", "half-year", "year":
		// ok
	default:
		return errors.New("invalid membership plan")
	}

	return s.Repo.BuyMembership(userID, plan)
}
