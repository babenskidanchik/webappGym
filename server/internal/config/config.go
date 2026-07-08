package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var JWTSecret string
var DatabaseURL string
var FrontendURL string

func Load() {

	_ = godotenv.Load()

	JWTSecret = os.Getenv("JWT_SECRET")
	if JWTSecret == "" {
		log.Fatal("JWT_SECRET is missing")
	}

	DatabaseURL = os.Getenv("DATABASE_URL")
	if DatabaseURL == "" {
		log.Fatal("DATABASE_URL is missing")
	}

	FrontendURL = os.Getenv("FRONTEND_URL")
	if FrontendURL == "" {
		log.Fatal("FRONTEND_URL is missing")
	}
}
