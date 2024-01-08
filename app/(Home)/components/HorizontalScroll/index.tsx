'use client'

import styles from './sections/alienlab/styles.module.css'
import AlienLab from "./sections/alienlab";
import IP from "./sections/ip4y";
import Dinari from "./sections/dinari";
import Marquee from "react-fast-marquee";

const HorizontalScroll = () => {


    return (
      <div className="">
        <div className=" relative z-10 rotate-[-10deg] pt-32 mb-20 overflow-visible w-[110vw] left-[-5vw]">
          <Marquee autoFill  direction="right" className="flex gap-5">
            <h2 className={` ${styles.headline} text-[40pt] uppercase font-semibold italic `}>Experiências <span className="text-[40pt] uppercase font-semibold italic mx-3">*</span></h2>
            
          </Marquee>
          <Marquee autoFill  direction="left" className="flex gap-5">
            <h2 className={` ${styles.headline} text-[40pt] uppercase font-semibold italic `}>Experiências <span className="text-[40pt] uppercase font-semibold italic mx-3">*</span></h2>
            
          </Marquee>
        </div>
        <AlienLab></AlienLab>
        <div className="overflow-hidden">
          <Dinari></Dinari>
        </div>
        <div className="overflow-hidden">
          <IP></IP>
        </div>
    
      </div>
    );
  };

export {HorizontalScroll}

