import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Menu = () => {
    const menuRef = useRef(null);
    const closeIconRef = useRef(null);
    const timeline = useRef(null);

    const navTitle = [
        { title: "Home", routeTo: "" },
        { title: "BCA", routeTo: "bca" },
        { title: "Bsc.CSIT", routeTo: "bsc-csit" },
        { title: "Clubs", routeTo: "clubs" },
    ];

    useEffect(() => {
        const menu = menuRef.current;
        timeline.current = gsap.timeline({ paused: true }).to(menu, {
            duration: 0.5,
            width: "25%",
        });
    }, []);

    const handleMenuOpen = () => {
        timeline.current.play();
    };

    const handleMenuClose = () => {
        timeline.current.reverse();
    };

    return (
        <div>
            {/* Menu Open Icon */}
            <div
                onClick={handleMenuOpen}
                className="absolute top-[5.4%] right-[6%] text-2xl text-zinc-900 cursor-pointer"
            >
                <RiMenu3Fill className="font-bold" />
            </div>

            {/* Menu Container */}
            <div
                ref={menuRef}
                className="menuContainer bg-zinc-50 backdrop-blur-lg  h-screen right-0 w-0 top-0 absolute overflow-hidden"
            >
                {/* Menu Items */}
                <div className=" mt-24 flex flex-col">
                    {navTitle.map((title, index) => (
                        <Link
                            to={`/${title.routeTo}`}
                            key={index}
                            className="text-2xl font-bold font-allianceNeue tracking-wider px-16 py-5 select-none hover:bg-zinc-300 hover:text-zinc-900 duration-1000 ease-in-out"
                        >
                            {title.title}
                        </Link>
                    ))}
                </div>

                {/* Close Icon */}
                <div
                    ref={closeIconRef}
                    className="absolute top-[3.9%] right-[6%] text-3xl text-zinc-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-300 duration-500 ease-linear cursor-pointer"
                    onClick={handleMenuClose}
                >
                    <IoClose className="font-bold rounded-full hover:rotate-90 duration-300" />
                </div>
            </div>
        </div>
    );
};

export default Menu;
