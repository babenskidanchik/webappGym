package database

import (
	"log"

	"GYM/server/internal/config"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var DB *sqlx.DB

func Connect() {

	db, err := sqlx.Connect(
		"postgres",
		config.DatabaseURL,
	)

	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatalf("Database ping failed: %v", err)
	}

	DB = db

	log.Println("Connected to database successfully")
}
