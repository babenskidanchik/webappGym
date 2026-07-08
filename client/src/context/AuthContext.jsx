import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const API_URL = "/api";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getMe() {
        const res = await fetch(`${API_URL}/me`, {
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Unauthorized");
        }

        return await res.json();
    }

    async function refreshUser() {
        try {
            const me = await getMe();
            setUser(me);
            return me;
        } catch (err) {
            setUser(null);
            throw err;
        }
    }

    useEffect(() => {
        refreshUser().finally(() => setLoading(false));
    }, []);

    async function login(data) {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error(await res.text());
        }

        return refreshUser();
    }

    async function register(data) {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error(await res.text());
        }

        return refreshUser();
    }

    async function buy(plan) {
        const res = await fetch(`${API_URL}/membership/buy`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ plan }),
        });

        if (!res.ok) {
            throw new Error(await res.text());
        }

        return refreshUser();
    }

    async function logout() {
        const res = await fetch(`${API_URL}/logout`, {
            method: "POST",
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error(await res.text());
        }

        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
                buy,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}