import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const GlobalCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Update cursor position on mouse move
        const handleMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                ease: "power2.out",
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed w-5 h-5 bg-red-500 rounded-full flex justify-center items-center text-[7px] z-50 pointer-events-none"
        ></div>
    );
};

export default GlobalCursor;
