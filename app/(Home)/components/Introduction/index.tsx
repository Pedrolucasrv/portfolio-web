'use client'

import { Button } from "@/src/components/Button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"

export const Introduction = () => {

    const router = useRouter()
    
    return(
        <div
 
  >

            <div className="min-h-screen flex items-center justify-center bg-accent px-3">
                <motion.div initial={{ opacity: 0, scale: 1, y:50 }} animate={{ opacity: 1, scale: 1, y:0 }} transition={{ duration: 1 }}  className="w-full max-w-[1000px]">
                    <p  className="text-secondary ">Olá, eu sou</p>
                    <div className="mt-5">
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-300">Pedro Lucas</h3>
                        <h3 className="text-4xl md:text-6xl md:mt-3 font-bold text-slate-400">Programador <span className="text-secondary ">Web</span>.</h3>
                        <h3 className="mt-5 max-w-[450px] text-slate-400">Sou um profissional e eterno estudante da computação! Amante de tecnologia e apaixonado pela musica.</h3>
                    </div>
                    <Button onClick={() => router.push('#sobre')} containerClassName="mt-5">Ver mais</Button>
                </motion.div>
                {/* <div className="absolute  bottom-[40px] left-10 bottom-10 after:absolute gap-2 text-[#616677]  transition-all  hover:after:bg-secondary cursor-pointer after:bg-[#616677] after:left-0 after:right-0 after:-bottom-[41px] after:mx-auto after after:z-9 after:h-[24px] after:w-[2px] after:right-0 flex " style={{textOrientation: 'mixed', writingMode: 'vertical-lr'}}>
                    <Link href='https://www.linkedin.com/in/pedrolucasrv/' target="_blank"  className="cursor-pointer ">
                        <IoLogoLinkedin className='hover:-translate-y-[2px] text-[#616677] hover:text-secondary transition-all' style={{ height: 22, width: 22}}/>
                    </Link>
                    <Link href='https://www.instagram.com/pedro.lucasrv/' target="_blank"  className="cursor-pointer ">
                        <IoLogoInstagram className='hover:-translate-y-[2px] text-[#616677] hover:text-secondary transition-all' style={{ height: 22, width: 22}}/>
                    </Link>
                    <Link href='https://github.com/Pedrolucasrv' target="_blank"  className="cursor-pointer ">
                        <IoLogoGithub className='hover:-translate-y-[2px] text-[#616677] hover:text-secondary transition-all' style={{ height: 22, width: 22}}/>
                    </Link>
                    </div>
                <Link href='mailto:pedro.lucasrv@outlook.com'  className="  bottom-10  absolute right-10 bottom-10 after:absolute text-[#616677] hover:-translate-y-2 transition-all hover:text-secondary hover:after:bg-secondary cursor-pointer after:bg-[#616677] after:left-0 after:right-0 after:-bottom-[41px] after:mx-auto after after:z-9 after:h-[24px] after:w-[2px] after:right-0" style={{textOrientation: 'mixed', writingMode: 'vertical-lr'}}>pedro.lucasrv@outlook.com</Link> */}

            </div>
    </div>
    )
}