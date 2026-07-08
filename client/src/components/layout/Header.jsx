import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";


export default function Header({ onJoin }) {

    const { user } = useAuth();


    return (
        <motion.header

            initial={{
                opacity:0,
                y:-20
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:.5
            }}

            className="
                relative
                z-20
                flex
                items-center
                justify-between
                px-10
                py-6
                border-b
                border-white/10
                bg-white/5
                backdrop-blur-xl
            "
        >


            <div className="
                text-xl
                font-bold
                tracking-widest
            ">
                GYM
                <span className="text-purple-400">
                    PRO
                </span>
            </div>



            {!user && (

                <button

                    onClick={onJoin}

                    className="
                        px-5
                        py-2
                        rounded-xl
                        bg-purple-600
                        hover:bg-purple-500
                        transition
                    "
                >
                    Join now
                </button>

            )}


        </motion.header>
    );
}