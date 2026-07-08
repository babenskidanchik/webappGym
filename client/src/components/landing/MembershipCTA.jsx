import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import GlassCard from "../ui/GlassCard";


export default function MembershipCTA({ onJoin }) {

    const { user } = useAuth();
    const navigate = useNavigate();


    function handleClick() {

        if (!user) {
            onJoin();
            return;
        }

        navigate("/membership");
    }


    return (

        <section className="relative z-10 px-10 py-24">


            <motion.div

                initial={{
                    opacity:0,
                    y:40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                viewport={{
                    once:true
                }}

                className="max-w-5xl mx-auto"

            >


                <GlassCard className="text-center overflow-hidden relative">


                    {/* glow */}
                    <div className="
                    absolute
                    -top-32
                    left-1/2
                    -translate-x-1/2
                    w-80
                    h-80
                    bg-purple-600/30
                    blur-[100px]
                    rounded-full
                    " />


                    <div className="relative z-10">


                        <h2 className="
                        text-5xl
                        font-extrabold
                        ">
                            Ready to transform yourself?
                        </h2>


                        <p className="
                        text-white/60
                        mt-5
                        max-w-xl
                        mx-auto
                        ">
                            Join GYM PRO and get access to professional
                            training, personalized plans and progress tracking.
                        </p>



                        {user ? (

                            <div className="mt-8">


                                <p className="
                                text-purple-400
                                mb-4
                                ">
                                    Current membership:
                                    {" "}
                                    {user.membership || "none"}
                                </p>


                                <motion.button

                                    whileHover={{
                                        scale:1.05
                                    }}

                                    whileTap={{
                                        scale:0.95
                                    }}

                                    onClick={handleClick}

                                    className="
                                    px-10
                                    py-4
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-purple-600
                                    to-pink-600
                                    font-semibold
                                    shadow-[0_0_40px_rgba(168,85,247,0.4)]
                                    "
                                >
                                    Manage membership
                                </motion.button>


                            </div>


                        ) : (


                            <motion.button

                                whileHover={{
                                    scale:1.05
                                }}

                                whileTap={{
                                    scale:0.95
                                }}

                                onClick={handleClick}

                                className="
                                mt-8
                                px-10
                                py-4
                                rounded-2xl
                                bg-gradient-to-r
                                from-purple-600
                                to-pink-600
                                font-semibold
                                shadow-[0_0_40px_rgba(168,85,247,0.4)]
                                "
                            >
                                Start your journey
                            </motion.button>


                        )}


                    </div>


                </GlassCard>


            </motion.div>


        </section>

    )
}