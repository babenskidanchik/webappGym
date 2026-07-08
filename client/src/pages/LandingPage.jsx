import { useAuth } from "../context/AuthContext";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import ProfileDrawer from "../components/layout/ProfileDrawer";
import Hero from "../components/landing/Hero";
import AboutGym from "../components/landing/AboutGym";
import Benefits from "../components/landing/Benefits";
import TrainingZones from "../components/landing/TrainingZones";
import Features from "../components/landing/Features";
import Coaches from "../components/landing/Coaches";
import ProgressPreview from "../components/landing/ProgressPreview";
import MembershipCTA from "../components/landing/MembershipCTA";


export default function LandingPage({ onJoin }) {


    const { user } = useAuth();



    return (

        <div className="
        min-h-screen
        text-white
        relative
        overflow-hidden
        bg-black
        ">



            {/* BACKGROUND */}

            <div

                className="
                absolute
                inset-0
                bg-cover
                bg-center
                scale-110
                "

                style={{

                    backgroundImage:
                    "url('https://i.pinimg.com/736x/5b/1d/42/5b1d4274fb0f09a08bf0ade803deef32.jpg')"

                }}

            />


            <div className="
            absolute
            inset-0
            bg-black/80
            " />



            <div className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            bg-purple-600/30
            blur-[120px]
            rounded-full
            " />


            <div className="
            absolute
            bottom-[-200px]
            right-[-200px]
            w-[600px]
            h-[600px]
            bg-pink-600/20
            blur-[140px]
            rounded-full
            " />



            <div className="
            absolute
            inset-0
            backdrop-blur-sm
            " />




            <div className="
            relative
            z-10
            ">


                <Header
                    onJoin={onJoin}
                />

                <ProfileDrawer />

                <Hero
                    onJoin={onJoin}
                    user={user}
                />



                <AboutGym />

                <Benefits />

                <TrainingZones />

                <Features />

                <Coaches />

                <ProgressPreview />

                <MembershipCTA
                    onJoin={onJoin}
                />



                <Footer />


            </div>


        </div>

    )

}