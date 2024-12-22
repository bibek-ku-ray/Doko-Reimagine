import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const Tagline = ({text}) => {
    const tagDiv = useRef()

    useGSAP(() => {
        gsap.from(tagDiv.current, {
            duration: 2,
            delay:2,
            y: 70,
            opacity: 0,
            ease: "elastic.out",
            color: "orange",
        })
    })

  return (
      <div ref={tagDiv} className="overflow-hidden absolute top-[61vh] font-allianceNeue select-none  flex justify-center items-center w-full h-20">
          <p className="text-center tracking-widest  text-zinc-950 ">
              <Link>{text} </Link>
          </p>
      </div>
  );
}

export default Tagline