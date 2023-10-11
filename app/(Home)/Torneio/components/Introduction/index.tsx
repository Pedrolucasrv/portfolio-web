'use client'

import { Button } from "@/src/components/Button"
import { motion } from "framer-motion"

export const Introduction = () => {


    
    return(
        <div
 
  >

            <div className="min-h-screen flex items-center justify-center bg-accent px-3">
                <motion.div initial={{ opacity: 0, scale: 1, y:50 }} animate={{ opacity: 1, scale: 1, y:0 }} transition={{ duration: 1 }}  className="w-full max-w-[1000px]">
                <div className="grid grid-cols-4 mt-20">
            <div className="col-span-12 md:col-span-1">
                <h2 className="font-semibold text-2xl mt-5">Torneio iP4y</h2>
                <div className="flex justify-between md:block mb-2">
                    <div className="mt-10">
                        <p className="mb-2 font-semibold">Jogadores</p>
                        <p>Mike</p>
                        <p>Enzo</p>
                        <p>Victor</p>
                        <p>Miqueias</p>
                        <p>Fernando</p>
                    </div>
                    <div className="mt-10">
                        <p className="mb-2 font-semibold">Eliminados</p>
                        <p className="line-through">Joao</p>
                        <p className="line-through">Pedro</p>
                        <p className="line-through">Weriston</p>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3">
                <iframe src="https://challonge.com/pt_BR/4yz2j4za/module" width="100%" height="500" ></iframe>
            </div>
        </div>
                </motion.div>
            </div>
    </div>
    )
}