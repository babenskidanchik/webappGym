import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function AuthModal({ onClose }) {
    const { login, register } = useAuth();

    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        try {
            setLoading(true);

            if (mode === "login") {
                await login({ email, password });
            } else {
                await register({ name, email, password });
            }

            onClose();
        } catch (e) {
            alert("AUTH ERROR: " + e.message);
            console.error("AUTH ERROR:", e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
            
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/80 text-white p-6 shadow-[0_0_80px_rgba(168,85,247,0.25)]">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">
                        {mode === "login" ? "Welcome back" : "Create account"}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition"
                    >
                        ✕
                    </button>
                </div>

                {/* TABS */}
                <div className="flex rounded-xl bg-white/5 p-1 mb-6">
                    <button
                        onClick={() => setMode("login")}
                        className={`flex-1 py-2 rounded-lg text-sm transition ${
                            mode === "login"
                                ? "bg-purple-600 text-white"
                                : "text-white/50 hover:text-white"
                        }`}
                    >
                        Login
                    </button>

                    <button
                        onClick={() => setMode("register")}
                        className={`flex-1 py-2 rounded-lg text-sm transition ${
                            mode === "register"
                                ? "bg-purple-600 text-white"
                                : "text-white/50 hover:text-white"
                        }`}
                    >
                        Register
                    </button>
                </div>

                {/* FORM */}
                <div className="space-y-3">

                    {mode === "register" && (
                        <input
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500"
                        />
                    )}

                    <input
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500"
                    />

                    <input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500"
                    />
                </div>

                {/* BUTTON */}
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full mt-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition font-medium disabled:opacity-40"
                >
                    {loading
                        ? "Loading..."
                        : mode === "login"
                        ? "Sign in"
                        : "Create account"}
                </button>

                {/* FOOTER SWITCH */}
                <p className="text-center text-xs text-white/40 mt-4">
                    {mode === "login"
                        ? "No account yet? Switch to register"
                        : "Already have an account? Switch to login"}
                </p>

            </div>
        </div>
    );
}