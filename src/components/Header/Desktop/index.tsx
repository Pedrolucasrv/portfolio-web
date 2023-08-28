import Image from "next/image"
import Logo from '@/src/assets/logo.png'
import {  motion } from "framer-motion"
import { Links } from "../Links"

export const Desktop = () =>{
    return(
        <>
             <motion.div initial={{opacity:0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} className="absolute h-[10vh] hidden  left-0 right-0 px-4 md:flex justify-between items-center max-w-[1720px] w-full mx-auto">
                    <div>
                        <Image src={Logo} height={28} width={28} alt=""></Image>
                    </div>
                    <Links/>
            </motion.div>
        </>
    )
}
