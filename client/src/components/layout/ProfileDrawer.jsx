import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function ProfileDrawer() {

    const { user, logout } = useAuth();

    const [open, setOpen] = useState(false);


    if (!user) return null;


    return (
        <>

            {/* PROFILE BUTTON */}

            <button
                onClick={() => setOpen(true)}
                className="
                    fixed
                    top-24
                    right-6
                    z-30
                    w-12
                    h-12
                    rounded-full
                    bg-white/10
                    border
                    border-white/20
                    backdrop-blur-xl
                    hover:bg-white/20
                    transition
                "
            >

                <span className="text-lg">
                    {user.name?.[0]}
                </span>

            </button>



            <AnimatePresence>

                {open && (

                    <>


                        {/* OVERLAY */}

                        <motion.div

                            initial={{
                                opacity:0
                            }}

                            animate={{
                                opacity:1
                            }}

                            exit={{
                                opacity:0
                            }}

                            onClick={() => setOpen(false)}

                            className="
                                fixed
                                inset-0
                                bg-black/60
                                backdrop-blur-sm
                                z-40
                            "
                        />



                        {/* DRAWER */}

                        <motion.aside

                            initial={{
                                x:"100%"
                            }}

                            animate={{
                                x:0
                            }}

                            exit={{
                                x:"100%"
                            }}

                            transition={{
                                type:"spring",
                                damping:25
                            }}

                            className="
                                fixed
                                right-0
                                top-0
                                h-full
                                w-[360px]
                                z-50
                                bg-black/80
                                border-l
                                border-white/10
                                backdrop-blur-2xl
                                p-8
                            "

                        >


                            <div className="
                                flex
                                justify-between
                                items-center
                            ">

                                <h2 className="
                                    text-xl
                                    font-semibold
                                ">
                                    Profile
                                </h2>


                                <button

                                    onClick={() => setOpen(false)}

                                    className="
                                        text-white/50
                                        hover:text-white
                                    "
                                >
                                    ✕
                                </button>

                            </div>




                            {/* AVATAR */}

                            <div className="
                                mt-10
                                flex
                                flex-col
                                items-center
                            ">


                                <div className="
                                    w-24
                                    h-24
                                    rounded-full
                                    bg-gradient-to-r
                                    from-purple-500
                                    to-pink-500
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                    font-bold
                                ">

                                    {user.name?.[0]}

                                </div>



                                <h3 className="
                                    mt-4
                                    text-2xl
                                    font-bold
                                ">
                                    {user.name}
                                </h3>


                                <p className="
                                    text-white/50
                                    text-sm
                                ">
                                    {user.email}
                                </p>


                            </div>




                            {/* INFO CARDS */}

                            <div className="
                                mt-10
                                space-y-4
                            ">


                                <div className="
                                    bg-white/5
                                    border
                                    border-white/10
                                    rounded-xl
                                    p-4
                                ">

                                    <p className="text-white/40 text-sm">
                                        Status
                                    </p>

                                    <p className="text-lg">
                                        {user.status}
                                    </p>

                                </div>



                                <div className="
                                    bg-white/5
                                    border
                                    border-white/10
                                    rounded-xl
                                    p-4
                                ">

                                    <p className="text-white/40 text-sm">
                                        Membership
                                    </p>

                                    <p className="text-lg">
                                        {user.membership || "No plan"}
                                    </p>

                                </div>



                            </div>




                            <button

                                onClick={logout}

                                className="
                                    absolute
                                    bottom-10
                                    left-8
                                    right-8
                                    py-3
                                    rounded-xl
                                    bg-red-500/80
                                    hover:bg-red-500
                                    transition
                                "

                            >
                                Logout
                            </button>



                        </motion.aside>


                    </>
                )}

            </AnimatePresence>


        </>
    );
}