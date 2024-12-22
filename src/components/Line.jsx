import gsap from "gsap";
import React, { useRef } from "react";

const Line = () => {
    const svgPath = useRef(null);

    const path = `M 0 100 Q 500 100 1000 100`;

    const handleMouseMove = (e) => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        const newPath = `M 0 100 Q ${cursorX} ${cursorY / 50} 1000 100`;

        if (svgPath.current) {
            gsap.to(svgPath.current, {
                attr: { d: newPath },
                duration: 0.3,

                ease: "power3.out",
            });
        }
    };

    const handleMouseLeave = () => {
        if (svgPath.current) {
            gsap.to(svgPath.current, {
                attr: { d: path },
                duration: 0.4,
                ease: "elastic.out(1, 0.2)",
            });
        }
    };

    return (
        <div
            className="w-full h-4 flex justify-center items-center relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <svg
                width="100%"
                height="200"
                viewBox="0 0 1000 200"
                preserveAspectRatio="none"
            >
                <path
                    ref={svgPath}
                    d={path}
                    stroke="#000"
                    strokeWidth="2"
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default Line;
