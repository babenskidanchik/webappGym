import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Membership() {
    const { user, buy } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/", {replace: true});
        }
    }, [user, navigate]);

    if (!user) return null;

    const hasMembership = !!user?.membership;


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-black p-6 text-white">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl space-y-6"
            >

                {/* HEADER CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold tracking-wide">
                            Membership
                        </h2>

                        <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                                hasMembership
                                    ? "bg-green-500/10 text-green-300 border-green-500/30"
                                    : "bg-white/5 text-white/60 border-white/10"
                            }`}
                        >
                            {hasMembership ? "ACTIVE" : "GUEST"}
                        </span>
                    </div>

                    <p className="text-white/50 text-sm mt-2">
                        Choose your plan and unlock full access
                    </p>
                </motion.div>

                {/* CURRENT PLAN */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                >
                    <p className="text-sm text-white/50">Current plan</p>
                    <p className="text-xl font-semibold mt-1">
                        {user?.membership || "No active plan"}
                    </p>
                </motion.div>

                {/* PRICING CARDS */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                    className="grid gap-4 md:grid-cols-3"
                >

                    {/* MONTH */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/50 transition"
                    >
                        <h3 className="text-lg font-semibold">1 Month</h3>
                        <p className="text-white/50 text-sm mt-1">Basic access</p>

                        <div className="mt-4 text-2xl font-bold">$9</div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            disabled={hasMembership}
                            onClick={() => buy("month")}
                            className="mt-5 w-full py-2 rounded-xl bg-purple-600/80 hover:bg-purple-500 transition disabled:opacity-30"
                        >
                            Buy
                        </motion.button>
                    </motion.div>

                    {/* HALF YEAR */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative rounded-3xl border border-purple-500/40 bg-gradient-to-b from-purple-600/10 to-black p-6"
                    >
                        <div className="absolute -top-3 right-4 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                            POPULAR
                        </div>

                        <h3 className="text-lg font-semibold">6 Months</h3>
                        <p className="text-white/50 text-sm mt-1">Best value</p>

                        <div className="mt-4 text-2xl font-bold">$39</div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            disabled={hasMembership}
                            onClick={() => buy("half-year")}
                            className="mt-5 w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition disabled:opacity-30"
                        >
                            Buy
                        </motion.button>
                    </motion.div>

                    {/* YEAR */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-pink-500/50 transition"
                    >
                        <h3 className="text-lg font-semibold">1 Year</h3>
                        <p className="text-white/50 text-sm mt-1">Pro access</p>

                        <div className="mt-4 text-2xl font-bold">$69</div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            disabled={hasMembership}
                            onClick={() => buy("year")}
                            className="mt-5 w-full py-2 rounded-xl bg-pink-600/80 hover:bg-pink-500 transition disabled:opacity-30"
                        >
                            Buy
                        </motion.button>
                    </motion.div>

                </motion.div>

                {/* FOOTER */}
                {hasMembership && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-sm text-white/40"
                    >
                        You already have an active membership
                    </motion.div>
                )}

            </motion.div>
        </div>
    );
}