'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"
import Logo from '@/src/assets/logo.png'
import { motion } from "framer-motion"

export const Header = () => {
    return(
        <motion.header initial={{opacity:0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} className="absolute h-[10vh] left-0 right-0 px-4 flex justify-between items-center max-w-[1720px] w-full mx-auto">
            <div>
                <Image src={Logo} height={28} width={28} alt=""></Image>
            </div>
            <nav className="flex gap-7 items-center">
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">01.</span> Sobre</Link>
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">02.</span> Experiências</Link>
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">03.</span> Trabalho</Link>
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">04.</span> Contato</Link>
                <Button className="text-sm">Currículo</Button>
            </nav>
        </motion.header>
    )
}