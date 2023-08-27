'use client'

import { Button } from "@/src/components/Button"
import { motion } from "framer-motion"

export const Introduction = () => {


    
    return(
        <div
 
  >

            <div className="min-h-screen flex items-center justify-center bg-accent">
                <motion.div initial={{ opacity: 0, scale: 1, y:50 }} animate={{ opacity: 1, scale: 1, y:0 }} transition={{ duration: 1 }}  className="w-full max-w-[1000px]">

                    <p  className="text-secondary ">Olá, eu sou</p>
                    <div className="mt-5">
                        <h3 className="text-6xl font-bold text-slate-300">Pedro Lucas</h3>
                        <h3 className="text-6xl mt-3 font-bold text-slate-400">Programador <span className="text-secondary ">Web</span>.</h3>
                        <h3 className="mt-5 max-w-[450px] text-slate-400">Sou um profissional e eterno estudante da computação! Amante de tecnologia e apaixonado pela musica.</h3>
                    </div>
                    <Button containerClassName="mt-5">Ver mais</Button>
                </motion.div>
            </div>
    </div>
    )
}