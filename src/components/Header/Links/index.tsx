import Link from "next/link"
import { Button } from "../../Button"
import {  motion } from "framer-motion"
import { useRouter } from "next/navigation"

export const Links = () =>{
    const router = useRouter()

    return(
        <>
            <nav className="flex flex-col md:flex-row mt-5 gap-7 items-center">
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">01.</span> Sobre</Link>
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">02.</span> Experiências</Link>
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">03.</span> Trabalho</Link>
                <Link className="text-slate-300 text-sm transition-all  border-secondary hover:-translate-y-[2px]" href=''><span className="text-secondary">04.</span> Contato</Link>
                <Button onClick={()=>{router.push('/curriculum.pdf')}} className="text-sm">Currículo</Button>
            </nav>
        </>
    )
}
