import { motion } from "framer-motion";

export default function Footer() {

    return (
        <motion.footer

            initial={{
                opacity: 0,
                y: 30
            }}

            whileInView={{
                opacity: 1,
                y: 0
            }}

            viewport={{
                once: true
            }}

            className="
                relative
                z-10
                mt-20
                border-t
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-10
                py-8
            "
        >

            <div className="
                max-w-6xl
                mx-auto
                flex
                flex-col
                md:flex-row
                justify-between
                items-center
                gap-4
            ">


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



                <p className="
                    text-white/40
                    text-sm
                ">
                    Build discipline. Build strength. Build yourself.
                </p>



                <p className="
                    text-white/40
                    text-sm
                ">
                    © {new Date().getFullYear()} GYM PRO
                </p>


            </div>


        </motion.footer>
    );
}