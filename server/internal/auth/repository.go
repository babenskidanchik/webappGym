package auth

import "GYM/server/internal/database"

type Repository struct{}

func NewRepository() *Repository {
	return &Repository{}
}

func (r *Repository) CreateUser(u *User) error {
	err := database.DB.QueryRow(`
		INSERT INTO users (name, email, password_hash, role, status)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING id
	`, u.Name, u.Email, u.PasswordHash, u.Role, u.Status).Scan(&u.ID)

	if err != nil {
		return err
	}

	return nil
}

func (r *Repository) GetUserByEmail(email string) (User, error) {
	var user User

	err := database.DB.Get(&user,
		`SELECT id, name, email, password_hash, role, status
		 FROM users 
		 WHERE email=$1`,
		email,
	)

	return user, err
}

func (r *Repository) GetUserByID(id int) (User, error) {
	var user User

	err := database.DB.Get(&user, `
		SELECT id, name, email, password_hash, role, status, membership, created_at
		FROM users
		WHERE id = $1
	`, id)

	return user, err
}

func (r *Repository) BuyMembership(userID int, plan string) error {
	_, err := database.DB.Exec(`
		UPDATE users
		SET
			status = 'member', 
			membership = $1
		WHERE id = $2
	`, plan, userID)

	return err
}
