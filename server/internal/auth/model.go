package auth

import "time"

type User struct {
	ID           int       `db:"id" json:"id"`
	Name         string    `db:"name" json:"name"`
	Email        string    `db:"email" json:"email"`
	PasswordHash string    `db:"password_hash" json:"-"`
	Role         string    `db:"role" json:"role"`
	Status       string    `db:"status" json:"status"`
	Membership   *string   `db:"membership" json:"membership"`
	CreatedAt    time.Time `db:"created_at" json:"created_at"`
}
