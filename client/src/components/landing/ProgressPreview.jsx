import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import GlassCard from "../ui/GlassCard";


export default function ProgressPreview() {

    const { user } = useAuth();


    const progressItems = [
        {
            title: "Workout history",
            desc: "Review completed workouts and track consistency."
        },
        {
            title: "Body measurements",
            desc: "Monitor weight, muscle growth and body changes."
        },
        {
            title: "Strength progress",
            desc: "See how your performance improves over time."
        },
        {
            title: "Transformation",
            desc: "Build a complete picture of your fitness journey."
        }
    ];


    const isMember = user?.status === "member";


    return (

        <section className="relative z-10 px-10 py-24">


            <div className="max-w-6xl mx-auto">


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

                    className="text-center mb-12"

                >

                    <h2 className="
                    text-4xl
                    md:text-5xl
                    font-extrabold
                    ">
                        Track your progress
                    </h2>


                    <p className="
                    text-white/50
                    mt-4
                    max-w-xl
                    mx-auto
                    ">
                        Your transformation is not just a feeling.
                        Measure every step of your journey.
                    </p>


                </motion.div>




                <div className="
                grid
                md:grid-cols-2
                gap-6
                ">


                    {progressItems.map((item,index)=>(


                        <motion.div

                            key={index}

                            initial={{
                                opacity:0,
                                y:30
                            }}

                            whileInView={{
                                opacity:1,
                                y:0
                            }}

                            transition={{
                                delay:index * 0.1
                            }}

                            viewport={{
                                once:true
                            }}

                        >


                            <GlassCard>


                                <h3 className="
                                text-xl
                                font-bold
                                ">
                                    {item.title}
                                </h3>


                                <p className="
                                text-white/60
                                mt-3
                                ">
                                    {item.desc}
                                </p>


                            </GlassCard>


                        </motion.div>


                    ))}


                </div>




                <motion.div

                    initial={{
                        opacity:0
                    }}

                    whileInView={{
                        opacity:1
                    }}

                    viewport={{
                        once:true
                    }}

                    className="
                    mt-10
                    text-center
                    "

                >


                    {isMember ? (

                        <div className="
                        inline-flex
                        items-center
                        gap-3
                        px-6
                        py-3
                        rounded-xl
                        bg-purple-500/20
                        border
                        border-purple-400/30
                        ">

                            <span className="
                            w-3
                            h-3
                            rounded-full
                            bg-green-400
                            " />


                            <span>
                                Progress tracking unlocked
                            </span>


                        </div>


                    ) : (

                        <div className="
                        text-white/50
                        ">

                            🔒 Progress tracking available for members


                        </div>

                    )}


                </motion.div>


            </div>


        </section>

    )
}