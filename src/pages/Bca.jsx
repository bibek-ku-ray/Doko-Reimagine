import React, { useRef, useState } from "react";
import HorizontalCardScroll from "../components/HorizontalCardScroll";
import { Link } from "react-router-dom";
import { DiEnvato } from "react-icons/di";
import gsap from "gsap";
import AnimatedCard from "../components/AnimatedCard";
import { useGSAP } from "@gsap/react";
import Searchbar from "../components/Searchbar";
import Menu from "../components/Menu";

const Bca = () => {
    const date = new Date();
    const year = date.getFullYear();
    const [yearActive, setYearActive] = useState(year);

    const studentsData = [
        {
            studentName: "John Doe",
            quote: "Keep pushing forward.",
            idol: "Elon Musk",
            nextFiveYearGoal:
                "Become a software engineer and start my own tech startup.",
            highSchool: "Green Valley High School",
            hometown: "New York",
            imageUrl:
                "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=2048x2048&w=is&k=20&c=mRIR2J-BH4YraFUF4pN_rFQ3ZdSF6oqwV2vD5p-vB0I=",
        },
        {
            studentName: "Jane Smith",
            quote: "Dream big, act bigger.",
            idol: "Marie Curie",
            nextFiveYearGoal:
                "Pursue a career in medical research and innovation.",
            highSchool: "Riverdale High School",
            hometown: "Chicago",
            imageUrl:
                "https://i.pinimg.com/736x/5a/ab/f8/5aabf84d67477f77d3bb8f0fe4cfcd17.jpg",
        },
        {
            studentName: "Mike Johnson",
            quote: "Hard work beats talent.",
            idol: "Kobe Bryant",
            nextFiveYearGoal:
                "Play professional basketball and inspire young athletes.",
            highSchool: "Springfield High School",
            hometown: "Los Angeles",
            imageUrl:
                "https://media.istockphoto.com/id/506881712/photo/guy-in-college.jpg?s=2048x2048&w=is&k=20&c=fsn_bnYFzHtDTaD7G6ufPBHvvGXlAaymfxQ4kRsBkII=",
        },
        {
            studentName: "Emily Brown",
            quote: "Kindness is strength.",
            idol: "Mother Teresa",
            nextFiveYearGoal:
                "Work as a social worker to help underprivileged communities.",
            highSchool: "Lakeview High School",
            hometown: "San Francisco",
            imageUrl:
                "https://plus.unsplash.com/premium_photo-1682096200654-2f3297b0e9bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            studentName: "Chris Davis",
            quote: "Never stop learning.",
            idol: "Steve Jobs",
            nextFiveYearGoal:
                "Create innovative apps that solve real-world problems.",
            highSchool: "Sunnydale High School",
            hometown: "Seattle",
            imageUrl:
                "https://media.istockphoto.com/id/1781711720/photo/cheerful-black-student-guy-holding-workbooks-posing-with-backpack-near-college-building.jpg?s=2048x2048&w=is&k=20&c=SggOkMpa12l4p1vWG_Zm-oSegVvx5GXYDC8Xgx9X1BM=",
        },
        {
            studentName: "Laura Wilson",
            quote: "Believe in yourself.",
            idol: "Oprah Winfrey",
            nextFiveYearGoal: "Become a motivational speaker and author.",
            highSchool: "Hillside High School",
            hometown: "Atlanta",
            imageUrl:
                "https://media.istockphoto.com/id/1253022693/photo/student-orientation-concept-happy-black-teen-girl-holding-workbooks-posing-outdoors.jpg?s=2048x2048&w=is&k=20&c=SlAkyqLoAzAMq7kNHn0mK33sYVCUnDnIUnVeUixL1bM=",
        },
        {
            studentName: "Daniel Martinez",
            quote: "Chase your passion.",
            idol: "Lionel Messi",
            nextFiveYearGoal:
                "Join a professional soccer team and represent my country.",
            highSchool: "Central High School",
            hometown: "Miami",
            imageUrl:
                "https://media.istockphoto.com/id/2060250488/photo/black-college-student-guy-holding-workbooks-computer-and-backpack-outdoor.jpg?s=2048x2048&w=is&k=20&c=JxpO_g3GRcgBN3ueTNoBnOtpGGaaQ4IXBa4ER4LPyCA=",
        },
        {
            studentName: "Sophia Taylor",
            quote: "The sky's the limit.",
            idol: "Amelia Earhart",
            nextFiveYearGoal:
                "Become a commercial pilot and explore the world.",
            highSchool: "Northwood High School",
            hometown: "Dallas",
            imageUrl:
                "https://media.istockphoto.com/id/1365601848/photo/portrait-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=2048x2048&w=is&k=20&c=1tV6MN-2gn0oHIftzIzLNuD8IjejZqP29MBeF_ZGoTU=",
        },
        {
            studentName: "Ethan Clark",
            quote: "Code your dreams.",
            idol: "Bill Gates",
            nextFiveYearGoal:
                "Develop AI-driven software to enhance daily life.",
            highSchool: "Westfield High School",
            hometown: "Boston",
            imageUrl:
                "https://media.istockphoto.com/id/1596307303/photo/portrait-of-a-young-smiling-male-indian-student-standing-outside-the-university-with-books-in.jpg?s=2048x2048&w=is&k=20&c=LFyXDpurTzHSuJOtXtAKWdCCt5Ym9iUTZLCva0S3iNs=",
        },
        {
            studentName: "Olivia Lewis",
            quote: "Be the change.",
            idol: "Malala Yousafzai",
            nextFiveYearGoal: "Advocate for education and equality worldwide.",
            highSchool: "Eastside High School",
            hometown: "Denver",
            imageUrl:
                "https://media.istockphoto.com/id/146905465/photo/student-with-text-book.jpg?s=2048x2048&w=is&k=20&c=MrZON0uJS_XF84mtu1kv2l-lfM9UTjPZp_CCbaqledU=",
        },
    ];

    const headingRef = useRef();
    const classRef = useRef();
    const yearRef = useRef();
    const studentCardRef = useRef();
    const searchBarRef = useRef();

    useGSAP(() => {
        gsap.from(headingRef.current, {
            duration: 1,
            opacity: 0,
            delay: 0.2,
            y: -100,
            ease: "power2.inOut",
        });
        
        gsap.from(classRef.current, {
            duration: 1,
            opacity: 0,
            delay: 0.3,
            x: -100,
            ease: "power2.inOut",
        });

        gsap.from(yearRef.current, {
            duration: 1,
            opacity: 0,
            delay: 0.1,
            y: -70,
            ease: "power2.inOut",
        });

        gsap.from(studentCardRef.current, {
            duration: 1,
            opacity: 0,
            delay: 0.6,
            y: 100,
            ease: "circ.out",
        });
    });

    return (
        <div className="w-full h-screen ">
            <div className="b w-full">
                <h1
                    ref={headingRef}
                    className="text-7xl text-center py-4 font-futura select-none"
                >
                    BCA
                </h1>


                <Searchbar />


                <div ref={yearRef} className="flex justify-center mt-1">
                    {[2022, 2023, 2024, 2025, 2026, 2027, 2028].map(
                        (year, index) => {
                            return (
                                <Link
                                    key={index}
                                    className={`flex flex-shrink-0 justify-center mx-2 py-2 px-4 rounded-xl border-2 border-black duration-300 ease-in-out ${
                                        yearActive == year
                                            ? "bg-zinc-950 text-white"
                                            : "hover:bg-zinc-700 hover:text-white"
                                    }`}
                                    onClick={() => setYearActive(year)}
                                >
                                    <p className="font-allianceNeue text-sm">
                                        {year}
                                    </p>
                                </Link>
                            );
                        }
                    )}
                </div>
            </div>

            <div className=" mx-20 my-2">
                <h2
                    ref={classRef}
                    className=" text-3xl font-allianceNeue font-semibold tracking-wider pt-7 pl-5"
                >{`Class of ${yearActive}`}</h2>

                {/** student card */}
                <div
                    ref={studentCardRef}
                    className="mt-3  flex flex-wrap justify-between"
                >
                    {studentsData.map((data, index) => {
                        return <AnimatedCard data={data} key={index} />;
                    })}
                </div>
            </div>
            <Menu/>
        </div>
    );
};

export default Bca;
