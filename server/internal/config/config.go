package config

import (
	"os"

	"github.com/joho/godotenv"
)

var JWTSecret string

func Load() {

	err := godotenv.Load()

	if err != nil {
		panic("Error loading .env")
	}

	JWTSecret = os.Getenv("JWT_SECRET")

	if JWTSecret == "" {
		panic("JWT_SECRET is missing")
	}
}
