import { motion } from "framer-motion";

export default function AboutGym() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 px-6 md:px-10 py-20"
        >

            <div 
                className="
                max-w-6xl mx-auto
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8 md:p-12
                shadow-[0_0_50px_rgba(168,85,247,0.12)]
                "
            >

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div>

                        <h2 className="
                            text-4xl md:text-5xl
                            font-extrabold
                            leading-tight
                        ">
                            More than just a
                            <span className="
                                block
                                bg-gradient-to-r
                                from-purple-400
                                via-pink-600
                                text-transpaernt
                                bg-clip-text
                            ">
                                fitness center
                            </span>
                        </h2>

                        <p className="
                            mt-6
                            text-white/60
                            text-lg
                            leading-relaxed
                        ">
                            GYM PRO is build for people who want real
                            transformation. Our goal is not only to provide
                            equipment, but to create a complete training
                            ecosystem where discipline becomes results.
                        </p>

                        <p className="
                            mt-4
                            text-white/50
                            leading-relaxed
                        ">
                            Professional equipment, structured workout,
                            membership management and progress tracking
                            come together in one powerful platform.
                        </p>


                    </div>


                    <div className="
                        grid
                        grid-cols-2
                        gap-4
                    ">

                        {[
                            {
                                number: "500+",
                                title: "Active members"
                            },
                            {
                                number: "24/7",
                                title: "Gym access"
                            },
                            {
                                number: "100+",
                                title: "Equipment units"
                            },
                            {
                                number: "10+",
                                title: "Professional coaches"
                            }

                        ].map((item, index) => (

                            <motion.div
                                key={index}

                                whileHover={{
                                    scale: 1.05
                                }}

                                className="
                                    rounded-2xl
                                    border border-white/10
                                    bg-black/30
                                    p-5
                                    transition
                                    hover:border-purple-500/40 
                                    hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
                                "
                            >

                                <div className="
                                    text-3xl
                                    font-bold
                                    text-purple-400
                                ">
                                    {item.number}
                                </div>


                                <div className="
                                    mt-2
                                    text-white/50
                                    text-sm
                                ">
                                    {item.title}
                                </div>


                            </motion.div>
                        ))}

                    </div>

                </div>

            </div>

        </motion.section>
    );
}