package main

import (
	"GYM/server/internal/auth"
	"GYM/server/internal/config"
	"GYM/server/internal/database"

	"encoding/json"
	"log"
	"net/http"
	"os"
)

type Response struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	resp := Response{
		Status:  "success",
		Message: "Server is healthy",
	}

	json.NewEncoder(w).Encode(resp)
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Access-Control-Allow-Origin", config.FrontendURL)
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Allow-Methods", "GET,POST,OPTIONS")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {

	config.Load()

	database.Connect()

	repo := auth.NewRepository()
	service := auth.NewService(repo)
	handler := auth.NewHandler(service)

	mux := http.NewServeMux()

	// public routes
	mux.HandleFunc("/health", healthHandler)
	mux.HandleFunc("/register", handler.Register)
	mux.HandleFunc("/login", handler.Login)
	mux.HandleFunc("/logout", handler.LogoutHandler)

	// protected routes
	mux.HandleFunc("/profile", auth.AuthMiddleware(handler.Profile))
	mux.HandleFunc("/me", auth.AuthMiddleware(handler.Me))
	mux.HandleFunc("/membership/buy", auth.AuthMiddleware(handler.BuyMembership))

	//react
	mux.Handle("/", http.FileServer(http.Dir("./dist")))

	// wrap with CORS middleware
	server := corsMiddleware(mux)

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	log.Fatal(http.ListenAndServe(":"+port, server))
}
