import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedText = ({ title, textSize }) => {
    useEffect(() => {
        const h1 = document.querySelector("h1");
        const text = h1.textContent;

        const splittedText = text.split("");
        let newText = "";

        const textLength = splittedText.length;

        splittedText.forEach((letter, index) => {
            if (index < textLength / 2)
                newText += `<div class="wave-letter1">${letter}</div>`;
            else newText += `<div class="wave-letter2">${letter}</div>`;
        });

        h1.innerHTML = newText;
       
            gsap.from(".wave-letter1", {
                y: -100,
                opacity: 0,
                duration: 1.5,
                delay: 1,
                stagger: 0.2,
                ease: "power2.out",
                color: "green",
            });
            gsap.from(".wave-letter2", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                delay: 1,
                stagger: -0.2,
                ease: "power2.out",
                color: "blue",
            });
     
    }, []);

    return (
        <div className="flex justify-center items-center ">
            <h1
                className={`flex text-[50vh] text-center font-revenda overflow-hidden text-zinc-900 select-none`}
            >
                {title}
            </h1>
        </div>
    );
};

export default AnimatedText;
