import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const HorizontalMenu = ({title, routeTo}) => {
    const dot = useRef();
    const content = useRef();
    const menu = useRef();
    const arrow = useRef();

    const [isArrow, setIsArrow] = useState(false);
    const [bgColor, setBgColor] = useState("red"); 

    const randomColor = [
        "#fca5a5",
        "#fdba74",
        "#bef264",
        "#86efac",
        "#6ee7b7",
        "#5eead4",
        "#fda4af",
        "#f0abfc",
        "#d6d3d1",
        "#a5b4fc",
        "#d8b4fe",
        "#fde047",
        "#c4b5fd",
        "#f0abfc",
        "violet",
        "#94a3b8",
        "#a1a1aa",
    ];

    const getRandomColor = () => {
        return randomColor[Math.floor(Math.random() * randomColor.length)];
    };

    const handleMouseEnter = () => {
        setIsArrow(true);
        setBgColor(getRandomColor()); 
        gsap.to(dot.current, {
            duration: 2,
            scale: 4,
            ease: "expo.out",
        });

        gsap.from(arrow.current, {
            duration: 1,
            delay: 1,
            
            opacity: 0,
            ease: "circ.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(dot.current, {
            duration: 2,
            scale: 1,
            ease: "expo.out",
        });
        setIsArrow(false);
    };

    

    return (
        <Link to={`${routeTo}`}>
        <div
            ref={menu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center space-x-5  cursor-pointer "
        >
            <div
                ref={dot}
                style={{ backgroundColor: bgColor }}
                className="w-[6px] h-[6px] rounded-full flex justify-center items-center"
            >
                {isArrow && (
                    <MdKeyboardDoubleArrowRight
                        ref={arrow}
                        className="inline-block text-zinc-900 transform duration-1000 -rotate-45"
                    />
                )}
            </div>
            <p ref={content} className="font-alliancePlatt">
                {title}
            </p>
        </div>
        </Link>
    );
};

export default HorizontalMenu;
