package auth

import (
	"context"
	"log"
	"net/http"
)

type contextKey string

const UserContextKey = contextKey("user")

func AuthMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		log.Println("COOKIES:", r.Cookies())

		cookie, err := r.Cookie("token")
		if err != nil {
			log.Println("TOKEN NOT FOUND")
			http.Error(w, "unauthorized", 401)
			return
		}

		log.Println("TOKEN:", cookie.Value)

		claims, err := ValidateJWT(cookie.Value)
		if err != nil {
			log.Println("JWT ERROR:", err)
			http.Error(w, "invalid token", 401)
			return
		}

		log.Println("CLAIMS:", claims)

		ctx := context.WithValue(r.Context(), UserContextKey, claims)
		next(w, r.WithContext(ctx))
	}
}
