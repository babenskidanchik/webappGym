import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`
                relative overflow-hidden
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                p-6
                ${className}
            `}
        >
            <div className="
                absolute inset-0
                opacity-0
                hover:opacity-100
                transition
                bg-gradient-to-r 
                from-purple-600/10 
                to-pink-600/10
            "/>

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}