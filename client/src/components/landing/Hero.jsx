import { motion } from "framer-motion";

export default function Hero({ onJoin, user }) {
    return (
        <section className="relative z-10 text-center px-6 py-28">

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-extrabold leading-tight"
            >
                More than just a
                <br />

                <span className="
                    bg-gradient-to-r 
                    from-purple-400 
                    via-pink-500 
                    to-purple-600
                    text-transparent 
                    bg-clip-text
                ">
                    fitness center
                </span>
            </motion.h1>


            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6
                }}
                className="
                    text-white/60 
                    mt-6 
                    text-lg 
                    max-w-2xl 
                    mx-auto
                "
            >
                GYM PRO is a complete ecosystem for your transformation.
                Train with purpose, track your progress and build the strongest
                version of yourself.
            </motion.p>


            {!user && (
                <motion.button
                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        delay: 0.4
                    }}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                    onClick={onJoin}
                    className="
                        mt-10
                        px-10
                        py-4
                        rounded-2xl
                        font-semibold
                        text-lg
                        bg-gradient-to-r
                        from-purple-600
                        to-pink-600
                        shadow-[0_0_40px_rgba(168,85,247,0.4)]
                    "
                >
                    Start your transformation
                </motion.button>
            )}

        </section>
    );
}