import { motion } from "framer-motion";

export default function TrainingZones() {

    const zones = [
        {
            title: "Strength Area",
            description:
                "Heavy equipment, free weights and everything needed to build real power.",
            icon: "💪",
        },
        {
            title: "Cardio Zone",
            description:
                "Modern treadmills, bikes and machines for endurance and conditioning.",
            icon: "🔥",
        },
        {
            title: "Functional Training",
            description:
                "Improve mobility, balance and athletic performance with dynamic workouts.",
            icon: "⚡",
        },
        {
            title: "Recovery Area",
            description:
                "Stretching, relaxation and recovery tools to keep your body ready.",
            icon: "🧘",
        },
    ];


    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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


                <div className="text-center mb-12">

                    <h2 className="
                        text-4xl md:text-5xl
                        font-extrabold
                    ">
                        Training
                        <span className="
                            bg-gradient-to-r
                            from-purple-400
                            to-pink-500
                            text-transparent
                            bg-clip-text
                        ">
                            {" "}zones
                        </span>
                    </h2>


                    <p className="
                        mt-4
                        text-white/60
                        max-w-xl
                        mx-auto
                    ">
                        Everything you need for strength,
                        endurance and complete transformation.
                    </p>

                </div>



                <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                ">


                    {zones.map((zone, index) => (

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

                            viewport={{
                                once:true
                            }}

                            transition={{
                                delay:index * 0.1
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
                                p-6
                                overflow-hidden
                                hover:border-purple-500/40
                                hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                                transition
                            "
                        >


                            {/* glow */}

                            <div className="
                                absolute
                                inset-0
                                opacity-0
                                group-hover:opacity-100
                                transition
                                bg-gradient-to-br
                                from-purple-600/10
                                to-pink-600/10
                            " />


                            <div className="
                                relative
                                z-10
                            ">


                                <div className="
                                    text-4xl
                                    mb-5
                                ">
                                    {zone.icon}
                                </div>


                                <h3 className="
                                    text-xl
                                    font-semibold
                                ">
                                    {zone.title}
                                </h3>


                                <p className="
                                    mt-3
                                    text-white/50
                                    text-sm
                                    leading-relaxed
                                ">
                                    {zone.description}
                                </p>


                            </div>


                        </motion.div>

                    ))}


                </div>


            </div>


        </motion.section>
    );
}