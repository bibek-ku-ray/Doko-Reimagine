import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SocialAnimate = ({ title, icon }) => {
    const logo = useRef();
    const content = useRef();
    const btn = useRef();

    useGSAP(() => {});

    const handleMouseEnter = () => {
        console.log("Mouse Enter");
        gsap.to(content.current, {
            duration: 0.5,
            x: 140,
            ease: "power2.out",
        })

        gsap.to(logo.current, {
            duration: 0.5,
            x: 45,
            ease: "power2.out",
        })
        
    };
    
    const handleMouseLeave = () => {
        console.log("Mouse Leave");
        gsap.to(content.current, {
            duration: 0.8,
            x: 0,
            ease: "power2.out",
        });
        gsap.to(logo.current, {
            duration: 0.8,
            x: "-50",
            ease: "power2.out",
        });
    };

    return (
    
        <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" px-7 py-2 rounded-lg cursor-pointer overflow-hidden mr-7"   
        >
            <div
                ref={btn}
                className=" flex items-center"
            >
                <img
                    src={icon}
                    alt={title}
                    className="w-4 -translate-x-16"
                    ref={logo}
                />
                <p ref={content} className="font-alliancePlatt " >{title}</p>
            </div>
        </Link>
    );
};

export default SocialAnimate;
