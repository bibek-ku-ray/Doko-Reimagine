import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Searchbar = () => {

    const searchBarRef  = useRef()

    useGSAP(() => {
        gsap.from(searchBarRef.current, {
            duration: 1,
            opacity: 0,
            delay: 0.2,
            y: -40,
            ease: "power2.inOut",
        });
    })

  return (
      <div ref={searchBarRef} className="w-full h-10 flex justify-center items-center ">
          <input
              className="text-sm rounded-l-2xl px-3 py-1 text-zinc-900 border font-alliancePlatt outline-none"
              placeholder="Search by Name"
          />
          <button className=" border rounded-r-2xl px-3 py-1 text-sm text-zinc-900 font-alliancePlatt">
              Search
          </button>
      </div>
  );
}

export default Searchbar