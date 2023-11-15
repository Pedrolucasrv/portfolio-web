'use client'

import { IoLogoLinkedin,  } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub  } from "react-icons/ai";
import { PiSmileyBlankDuotone } from "react-icons/pi";
import { Button } from "@/src/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";


export const Contact = () => {
    return(
        <div id="contato" style={{background:'linear-gradient(391deg, #fdcd3b 50%, #ffed4b 50%)'}} 
       className=" py-[200px] px-5 flex justify-center relative items-center bg-accent">
            <div className="bg-accent relative cursor-grab ">
            <div className="absolute flex flex-col justify-center items-center w-full h-full">
                <p className="text-white font-semibold mt-3">Para de puxar aí, por favor.</p>
                <PiSmileyBlankDuotone style={{height: 30, width:30}}></PiSmileyBlankDuotone>
            </div>
                <motion.div
                 drag
                 dragSnapToOrigin
                 dragConstraints={{
                   top: -50,
                   left: -50,
                   right: 50,
                   bottom: 50,
                 }}
                 className="grid py-7 bg-accent left-2 border-2 relative border-secondary -top-2 grid-cols-5 w-full container max-w-[600px] gap-2">
                    <div className="col-span-4 mx-5">
                        <p className="text-3xl font-semibold">
                            Quer entrar em <span className="relative before:absolute before:bg-secondary before:w-[90%] before:h-[10px] before:-right-2 before:bottom-1 before:z-[-1] z-10">contato?</span>
                        </p>
                        <p className="my-7 ">
                            Estou sempre procurando por novas <span className="text-secondary">oportunidades</span>, se quiser entrar em contato comigo, estarei sempre disposto a responder!
                        </p>
                        <Link href='mailto:pedro.lucasrv@outlook.com' target="_blank"  className="">

                            <Button  containerClassName="mb-3">Fale comigo!</Button>
                        </Link>
                    </div>
                    <div className="col-span-1  border-l-[2px] border-secondary">
                        <div className="flex flex-col items-center gap-4 py-7 w-full px-5">
                            <Link href='https://www.linkedin.com/in/pedrolucasrv/' target="_blank"  className="cursor-pointer grayscale-[100%] hover:-translate-y-1 hover:grayscale-0 transition-all">
                                <IoLogoLinkedin style={{color: "#FFC800", height: 35, width: 35}}/>
                            </Link>
                            <Link href='mailto:pedro.lucasrv@outlook.com' target="_blank"  className="cursor-pointer grayscale-[100%] hover:-translate-y-1 hover:grayscale-0 transition-all">
                                <HiOutlineMail style={{color: "#FFC800", height: 35, width: 35}}/>
                            </Link>
                            <Link href='https://github.com/Pedrolucasrv' target="_blank"  className="cursor-pointer grayscale-[100%] hover:-translate-y-1 hover:grayscale-0 transition-all">
                                <AiFillGithub style={{color: "#FFC800", height: 35, width: 35}}/>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}