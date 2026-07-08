import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";


export default function Coaches() {

    const coaches = [
        {
            name: "Alex Morgan",
            role: "Strength Coach",
            description:
                "Specialist in muscle growth, strength programs and heavy training."
        },
        {
            name: "Sarah Williams",
            role: "Fitness Coach",
            description:
                "Helps members build sustainable habits and transform their body."
        },
        {
            name: "Daniel Carter",
            role: "Performance Coach",
            description:
                "Focuses on athletic performance, mobility and functional training."
        }
    ];


    return (

        <section className="relative z-10 px-10 py-20">


            <div className="text-center mb-12">

                <h2 className="text-4xl font-bold">
                    Meet our coaches
                </h2>

                <p className="text-white/50 mt-3 max-w-xl mx-auto">
                    Professional trainers who help you achieve real results.
                </p>

            </div>



            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">


                {coaches.map((coach,index)=>(


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
                            delay:index * 0.15
                        }}

                        viewport={{
                            once:true
                        }}

                    >


                        <GlassCard>


                            <div className="
                            w-20
                            h-20
                            rounded-full
                            mx-auto
                            mb-5
                            bg-gradient-to-r
                            from-purple-500
                            to-pink-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-bold
                            ">
                                {coach.name.charAt(0)}
                            </div>



                            <h3 className="text-xl font-bold text-center">
                                {coach.name}
                            </h3>


                            <p className="
                            text-purple-400
                            text-center
                            mt-1
                            ">
                                {coach.role}
                            </p>


                            <p className="
                            text-white/60
                            text-center
                            mt-4
                            ">
                                {coach.description}
                            </p>


                        </GlassCard>


                    </motion.div>


                ))}


            </div>


        </section>

    )
}