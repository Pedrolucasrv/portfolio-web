import Hamburger from "hamburger-react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import Image from "next/image"
import Logo from '@/src/assets/logo.png'
import { Links } from "../Links"

export const Mobile = () =>{

    const [ open, setOpen ] = useState(false)

    const handleClose = (e: any) => {
            setOpen(e)
    }

    useEffect(()=>{
        if(open){
            document.getElementsByTagName("html")[0].style.overflow = "hidden";
        }else{
            document.getElementsByTagName("html")[0].style.overflow = "auto";
        }
    }, [open])


    return(
        <>
        {/* mobile */}
            <div className="block md:hidden">
                    <div className="absolute z-20 right-2 top-2">
                        <Hamburger toggled={open} toggle={handleClose} />
                    </div>
                    <AnimatePresence>
                    {
                        open && (
                        <motion.div key={1} exit={{x:'-100vh'}} initial={{opacity:0, x:'-100vh', height:'100vh'}} animate={{opacity: 1, x: '0', height:'100vh', background:'black'}} transition={{duration: 1}} className="absolute  z-10 top-0 left-0 right-0 px-4 flex flex-col justify-center items-center max-w-[1720px] w-full mx-auto">
                            <div>
                                <Image src={Logo} height={28} width={28} alt=""></Image>
                            </div>
                            <Links/>

                        </motion.div>)
                    }
                    </AnimatePresence>
                </div>
        </>
    )
}