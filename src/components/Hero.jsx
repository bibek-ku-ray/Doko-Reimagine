import React, { useEffect, useRef } from "react";
import HorizontalMenu from "./HorizontalMenu";

import Line from "./Line";
import AnimatedText from "./AnimatedText";
import SocialAnimate from "./SocialAnimate";
import InstagramIcon from "../assets/images/instagram.png";
import FacebookIcon from "../assets/images/facebook.png";
import LinkedInIcon from "../assets/images/linkedin.png";
import TwitterIcon from "../assets/images/twitter.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Tagline from "./Tagline";
import DeerPNG from "../assets/images/deer.png";
import CoursePNG from "../assets/images/learning.png";
import HeroCard from "./HeroCard";

const Hero = () => {
    const socialMedia = [
        { title: "Instagram", icon: InstagramIcon },
        { title: "Twitter", icon: TwitterIcon },
        { title: "Facebook", icon: FacebookIcon },
        { title: "LinkedIn", icon: LinkedInIcon },
    ];
    const navTitle = [
        { title: "Home", routeTo: "" },
        { title: "BCA", routeTo: "bca" },
        { title: "Bsc.CSIT", routeTo: "bsc-csit" },
        { title: "Clubs", routeTo: "clubs" },
    ];

    const menu = useRef();
    const socialHandle = useRef();

    const main = useRef();
    const firstDivRef = useRef();
    const topBtnRef = useRef();
    const bottomBtnRef = useRef();
    const cardRef = useRef();
    const heroRefFirst = useRef();
    const heroRefSecond = useRef();

    useGSAP(() => {
        gsap.from(menu.current.children, {
            duration: 1,
            y: -200,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
        });
    });

    useGSAP(() => {
        gsap.from(socialHandle.current.children, {
            duration: 1,
            y: 200,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
        });
    });

    useGSAP(() => {
        gsap.from(topBtnRef.current, {
            duration: 1,
            y: -200,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
        });
    });

    useGSAP(() => {
        gsap.from(cardRef.current.children, {
            duration: 1,
            x: 200,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
    useGSAP(() => {
        gsap.from(bottomBtnRef.current, {
            duration: 1,
            y: 200,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out",
        });
    });

    function handleScroll() {}

    return (
        <div
            ref={main}
            onScroll={handleScroll}
            className="flex h-screen items-center bg-zinc-900 overflow-hidden"
        >
            {/* Hero Section First half*/}
            <div
                ref={heroRefFirst}
                className="h-[98%] w-[75%] mx-2  relative bg-zinc-100 rounded-xl"
            >
                {/* Horizontal Menu */}
                <div
                    ref={menu}
                    className="flex  justify-center items-center text-lg gap-x-24 px-10 py-5 "
                >
                    {navTitle.map((nav, index) => (
                        <HorizontalMenu
                            key={index}
                            title={nav.title}
                            routeTo={nav.routeTo}
                        />
                    ))}
                </div>

                {/* Animated Text  - DOKO*/}
                <AnimatedText title={"DOKO"} textSize={"55vh"} />

                {/* DWIT */}
                <Tagline text={"By Deerwalk Institute of Technology"} />

                {/* SVG Line */}
                <Line />

                {/* Social Media */}
                <div
                    ref={socialHandle}
                    className=" flex mt-5  w-full justify-center absolute "
                >
                    {socialMedia.map((social, index) => (
                        <SocialAnimate
                            key={index}
                            title={social.title}
                            icon={social.icon}
                        />
                    ))}
                </div>
            </div>

            <div className="w-[30%] h-[98%] mr-2 relative bg-zinc-100 rounded-xl px-3 py-2">
                <div
                    ref={topBtnRef}
                    className="mt-3  w-full rounded-l-xl flex justify-center items-center gap-5 font-alliancePlatt"
                >
                    <button className=" border-2 px-12 border-black rounded-full hover:bg-zinc-900 hover:text-white duration-200 ease-linear">
                        DWIT
                    </button>
                    <button className=" border-2 px-12 border-black rounded-full hover:bg-zinc-900 hover:text-white duration-200 ease-linear">
                        Exam Paper
                    </button>
                </div>
                <div
                    ref={cardRef}
                    className="w-full h-[80%] flex flex-col gap-3 mt-5 "
                >
                    <div className="relative w-full bg-green-500 h-[48%] rounded-3xl flex justify-center items-end overflow-hidden">
                        <HeroCard
                            title={"14 Clubs"}
                            slogan={"Unite, Innovate, Thrive!"}
                            routeTo={"/clubs"}
                            isClub={true}
                            logo={DeerPNG}
                        />
                    </div>
                    <div className="w-full bg-blue-500 h-[24%] rounded-3xl">
                        {" "}
                        <HeroCard
                            title={"Bsc.CSIT"}
                            slogan={"Code, Create, Conquer!"}
                            routeTo={"/bsc-csit"}
                            isClub={false}
                            logo={CoursePNG}
                        />
                    </div>
                    <div className="w-full bg-orange-500 h-[24%] rounded-3xl">
                        <HeroCard
                            title={"BCA"}
                            slogan={"Learn, Innovate, Excel!"}
                            routeTo={"/bca"}
                            isClub={false}
                            logo={CoursePNG}
                        />
                    </div>
                </div>

                <div
                    ref={bottomBtnRef}
                    className="mt-3 h-[10%]  w-full rounded-l-xl flex justify-center items-center gap-5 font-alliancePlatt"
                >
                    <button className=" border-2 px-12 border-black rounded-full hover:bg-zinc-900 hover:text-white duration-200 ease-linear">
                        Login
                    </button>
                    <button className=" border-2 px-12 border-black rounded-full hover:bg-zinc-900 hover:text-white duration-200 ease-linear">
                        Signin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
