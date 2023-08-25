import { IoLogoLinkedin,  } from "react-icons/io";
import { HiOutlineMail,  } from "react-icons/hi";
import { AiFillGithub,  } from "react-icons/ai";
import { Button } from "@/src/components/Button";


export const Contact = () => {
    return(
        <div className=" py-[200px] flex justify-center items-center bg-accent">
            <div className="bg-secondary">

                <div className="grid py-7 bg-accent translate-x-2 border-2 border-secondary -translate-y-2 grid-cols-5 w-full container max-w-[600px] gap-2">
                    <div className="col-span-4 mx-5">
                        <p className="text-3xl font-semibold">
                            Quer entrar em <span className="relative before:absolute before:bg-secondary before:w-[90%] before:h-[10px] before:-right-2 before:bottom-1 before:z-[-1] z-10">contato?</span>
                        </p>
                        <p className="my-7 ">
                            Estou sempre procurando por novas <span className="text-secondary">oportunidades</span>, se quiser entrar em contato comigo, estarei sempre disposto a responder!
                        </p>
                        <Button containerClassName="mb-3">Fale comigo!</Button>
                    </div>
                    <div className="col-span-1  border-l-[2px] border-secondary">
                        <div className="flex flex-col items-center gap-4 py-7 w-full px-5">
                            <div className="cursor-pointer grayscale-[100%] hover:-translate-y-1 hover:grayscale-0 transition-all">
                                <IoLogoLinkedin style={{color: "#FFC800", height: 35, width: 35}}/>
                            </div>
                            <div className="cursor-pointer grayscale-[100%] hover:-translate-y-1 hover:grayscale-0 transition-all">
                                <HiOutlineMail style={{color: "#FFC800", height: 35, width: 35}}/>
                            </div>
                            <div className="cursor-pointer grayscale-[100%] hover:-translate-y-1 hover:grayscale-0 transition-all">
                                <AiFillGithub style={{color: "#FFC800", height: 35, width: 35}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}