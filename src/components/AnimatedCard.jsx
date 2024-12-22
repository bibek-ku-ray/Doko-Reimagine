import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const AnimatedCard = ({ data }) => {
    const cardFirstFace = useRef();

    const cardDetailFace = useRef();

    function handleMouseEnter() {
        gsap.to(cardDetailFace.current, {
            top: 0,
            duration: 0.9,
            ease: "expo.out",
            delay: 0.1,
        });
    }
    function handleMouseLeave() {
        gsap.to(cardDetailFace.current, {
            top: 350,
            duration: 0.9,
            ease: "power3.inOut",
            delay: 0.1,
        });
    }

    const randomColor = [
        "#fee2e2",
        "#ffedd5",
        "#fef3c7",
        "#fef9c3",
        "#ecfccb",
        "#dcfce7",
        "#d1fae5",
        "#ccfbf1",
        "#e0f2fe",
        "#dbeafe",
        "#bae6fd",
        "#f3e8ff",
        "#fecdd3",
        "#fae8ff",
        "#fce7f3",
        "#ffe4e6",
    ];

    
    const getRandomColor = () => {
        return randomColor[Math.floor(Math.random() * randomColor.length)];
    };
    
    const [customColor, setCustomColor] = useState("");
    const [firstGradientColor, setFirstGradientColor] = useState("");
    const [secondGradientColor, setSecondGradientColor] = useState("");

    // const col = getRandomColor();
    
    useEffect(()=>{
        const col = getRandomColor();
        const firstGradient = getRandomColor();
        const secondGradient = getRandomColor();
        setCustomColor(col);
        setFirstGradientColor(firstGradient);
        setSecondGradientColor(secondGradient); 
    },[])

    return (
        <div
            ref={cardFirstFace}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundImage: `url(${data.imageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="w-60 h-80 mb-3 bg-green-200 overflow-hidden rounded-xl mx-auto relative"
        >
            <div
                style={{
                    backgroundImage:
                        `linear-gradient(to bottom right, ${firstGradientColor}, ${secondGradientColor})`,
                }}
                className="absolute bottom-0 w-full px-5 py-3 text-xl font-semibold font-alliancePlatt"
            >
                <p className="text-center ">{data.studentName}</p>
            </div>

            <div
                ref={cardDetailFace}
                style={{ backgroundColor: customColor }}
                className={`w-full h-full bg-${customColor}-200 absolute z-20 top-80 px-3 py-3`}
            >
                <img
                    src={`${data.imageUrl}`}
                    className="w-24 h-24 rounded-lg  object-cover mb-2"
                />
                <div>
                    <p className="font-alliancePlatt text-lg font-semibold">
                        {data.studentName}
                    </p>
                    <p className="font-alliancePlatt text-sm">{data.quote}</p>
                </div>
                <div className="mt-3">
                    <p className="font-alliancePlatt text-sm"> <b>Idol:</b>  {data.idol}</p>
                    <p className="font-alliancePlatt text-sm mt-1">
                        <b>Goal:</b>  {data.nextFiveYearGoal}
                    </p>

                    <p className="font-alliancePlatt text-sm font-semibold mt-3">
                        {data.highSchool}
                    </p>
                    <p className="font-alliancePlatt font-semibold text-sm mt-[1px]">
                        {data.hometown}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnimatedCard;
