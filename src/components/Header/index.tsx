'use client'

import { AnimatePresence, motion } from "framer-motion"
import { Mobile } from "./Mobile"
import { Desktop } from "./Desktop"



export const Header = () => {

  
    return(
            <header className="absolute w-screen md:w-full md:max-w-[1720px] md:left-0 md:right-0 md:mx-auto ">
                <Desktop/>
                <Mobile/>   
            </header>
    )
}



