import { motion } from "framer-motion";

export default function Benefits() {

    const benefits = [
        {
            title: "Smart Membership",
            description:
                "Manage your subscription, check your plan and keep full control of your gym access.",
            icon: "🎫",
        },
        {
            title: "Progress Tracking",
            description:
                "Monitor your transformation, track workouts and see your improvements over time.",
            icon: "📈",
        },
        {
            title: "Workout History",
            description:
                "Keep your training history organized and never lose your achievements.",
            icon: "🏋️",
        },
        {
            title: "Personal Goals",
            description:
                "Set targets, stay motivated and build your perfect fitness routine.",
            icon: "🎯",
        },
        {
            title: "Professional Support",
            description:
                "Get guidance from experienced coaches and improve your technique.",
            icon: "👑",
        },
        {
            title: "Fitness Community",
            description:
                "Train together with motivated people who share the same goals.",
            icon: "🔥",
        },
    ];


    return (

        <motion.section
            initial={{
                opacity:0,
                y:50
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true
            }}

            transition={{
                duration:0.7
            }}

            className="
                relative
                z-10
                px-6 md:px-10
                py-20
            "
        >


            <div className="
                max-w-6xl
                mx-auto
            ">


                <div className="
                    text-center
                    mb-12
                ">

                    <h2 className="
                        text-4xl md:text-5xl
                        font-extrabold
                    ">
                        Everything you need
                        <span
                            className="
                            block
                            bg-gradient-to-r
                            from-purple-400
                            via-pink-500
                            to-purple-600
                            text-transparent
                            bg-clip-text
                            "
                        >
                            to transform yourself
                        </span>
                    </h2>


                    <p className="
                        mt-5
                        text-white/60
                        max-w-2xl
                        mx-auto
                    ">
                        GYM PRO combines professional training,
                        membership management and digital tools
                        into one complete fitness experience.
                    </p>


                </div>



                <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                ">


                    {
                    benefits.map((item,index)=>(


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

                            viewport={{
                                once:true
                            }}

                            transition={{
                                delay:index * 0.08
                            }}

                            whileHover={{
                                scale:1.04
                            }}

                            className="
                                group
                                relative
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-7
                                hover:border-purple-500/40
                                hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                                transition
                            "
                        >


                            <div className="
                                absolute
                                inset-0
                                rounded-3xl
                                bg-gradient-to-br
                                from-purple-600/10
                                to-pink-600/10
                                opacity-0
                                group-hover:opacity-100
                                transition
                            " />


                            <div className="
                                relative
                                z-10
                            ">


                                <div className="
                                    text-4xl
                                    mb-5
                                ">
                                    {item.icon}
                                </div>


                                <h3 className="
                                    text-xl
                                    font-semibold
                                ">
                                    {item.title}
                                </h3>


                                <p className="
                                    mt-3
                                    text-white/50
                                    text-sm
                                    leading-relaxed
                                ">
                                    {item.description}
                                </p>


                            </div>


                        </motion.div>


                    ))
                    }


                </div>


            </div>


        </motion.section>

    );
}