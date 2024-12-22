import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const HeroCard = ({ title, slogan, routeTo, isClub, logo }) => {
    return (
        <div className="flex w-full h-full justify-center items-end relative">
            <div
                style={{ backdropFilter: "blur(4px)" }}
                className={`${
                    isClub ? "w-5/6 mb-3" : "w-3/6 mb-2"
                } h-12  overflow-hidden rounded-3xl  -ml-6 flex justify-center items-center  hover:bg-zinc-800  duration-300 ease-in-out `}
            >
                {" "}
                <Link
                    className={`text-white ${
                        isClub ? "text-3xl" : "text-xl"
                    } font-bold font-allianceNeue tracking-widest text-center flex justify-center items-center gap-2 `}
                    to={routeTo}
                >
                    {title} <BsArrowUpRightCircleFill />
                </Link>{" "}
            </div>
            <div className=" absolute text-white tracking-widest -top-3 left-6 w-[40%] font-semibold font-allianceNeue">
                <br /> {slogan}
            </div>
            <div className={`absolute ${isClub ? "right-10 top-12": "right-14 top-6"} `}>
                <img src={logo} alt="logo" className={`${isClub ? "w-28":"w-14"}`} />
            </div>
        </div>
    );
};

export default HeroCard;
