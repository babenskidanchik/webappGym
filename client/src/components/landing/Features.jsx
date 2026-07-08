import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GlassCard from "../ui/GlassCard";


export default function Features() {

    const navigate = useNavigate();


    const features = [
        {
            title: "Modern Equipment",
            description:
                "Professional machines, free weights and training zones designed for serious results."
        },
        {
            title: "Personal Programs",
            description:
                "Structured workout plans adapted to your goals and experience level."
        },
        {
            title: "Nutrition Support",
            description:
                "Build better habits with guidance focused on sustainable results."
        },
        {
            title: "Progress Analytics",
            description:
                "Track improvements, workouts and transformation over time.",
            route: true
        },
        {
            title: "24/7 Access",
            description:
                "Train whenever you want with flexible gym availability."
        },
        {
            title: "Community",
            description:
                "Stay motivated with people who share the same goals."
        }
    ];


    return (

        <section className="relative z-10 px-10 py-24">


            <div className="text-center mb-12">


                <motion.h2

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    "
                >
                    Everything you need to become stronger
                </motion.h2>


                <p className="
                text-white/50
                mt-4
                max-w-xl
                mx-auto
                ">
                    More than a gym. A complete system for building your best version.
                </p>


            </div>




            <div className="
            grid
            md:grid-cols-3
            gap-6
            max-w-6xl
            mx-auto
            ">


                {features.map((item,index)=>(


                    <motion.div

                        key={index}

                        initial={{
                            opacity:0,
                            y:40
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        transition={{
                            delay:index * 0.08
                        }}

                        viewport={{
                            once:true
                        }}

                        whileHover={{
                            scale:1.03
                        }}

                        onClick={()=>{
                            if(item.route){
                                navigate("/profile");
                            }
                        }}

                        className={item.route ? "cursor-pointer" : ""}

                    >


                        <GlassCard>


                            <div className="
                            mb-5
                            w-12
                            h-12
                            rounded-xl
                            bg-gradient-to-r
                            from-purple-600
                            to-pink-600
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-xl
                            ">
                                {index + 1}
                            </div>



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
                                {item.description}
                            </p>


                        </GlassCard>


                    </motion.div>


                ))}


            </div>


        </section>

    )
}