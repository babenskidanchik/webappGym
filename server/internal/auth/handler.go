package auth

import (
	"encoding/json"
	"net/http"
)

var secret = []byte("SECRET_KEY")

type Handler struct {
	Service *Service
}

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// register handler
func NewHandler(service *Service) *Handler {
	return &Handler{Service: service}
}

func (h *Handler) Register(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var req RegisterRequest

	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	user, err := h.Service.Register(req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	token, err := GenerateJWT(user)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    token,
		HttpOnly: true,
		Path:     "/",
		SameSite: http.SameSiteLaxMode,
		MaxAge:   24 * 60 * 60,
	})

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}

// login handler
func (h *Handler) Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var req LoginRequest
	json.NewDecoder(r.Body).Decode(&req)

	user, err := h.Service.Login(req.Email, req.Password)
	if err != nil {
		http.Error(w, "invalid email or password", http.StatusUnauthorized)
		return
	}

	token, err := GenerateJWT(user)
	if err != nil {
		http.Error(w, "failed to generate token", 500)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    token,
		HttpOnly: true,
		Path:     "/",
		SameSite: http.SameSiteLaxMode,
		MaxAge:   24 * 60 * 60,
	})

	json.NewEncoder(w).Encode(map[string]bool{
		"success": true,
	})

}

func (h *Handler) Profile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	claims := r.Context().Value(UserContextKey).(*Claims)

	json.NewEncoder(w).Encode(map[string]interface{}{
		"user_id": claims.UserID,
		"email":   claims.Email,
		"role":    claims.Role,
	})
}

func (h *Handler) Me(w http.ResponseWriter, r *http.Request) {
	claims, ok := r.Context().Value(UserContextKey).(*Claims)
	if !ok {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	user, err := h.Service.GetUserByID(claims.UserID)
	if err != nil {
		http.Error(w, "not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(user)
}

func (h *Handler) BuyMembership(w http.ResponseWriter, r *http.Request) {

	claims, ok := r.Context().Value(UserContextKey).(*Claims)
	if !ok {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	var req struct {
		Plan string `json:"plan"`
	}

	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	err = h.Service.BuyMembership(claims.UserID, req.Plan)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message":"membership purchased"}`))
}

func (h *Handler) LogoutHandler(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
	})

	w.Header().Set("Context-Type", "application/json")
	w.Write([]byte(`{"ok":true}`))
}
