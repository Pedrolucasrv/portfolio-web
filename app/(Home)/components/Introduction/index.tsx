import { Button } from "@/src/components/Button"

export const Introduction = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-accent">
            <div className="w-full max-w-[1000px]">

                <p className="text-secondary ">Olá, eu sou</p>
                <div className="mt-5">
                    <h3 className="text-6xl font-bold text-slate-300">Pedro Lucas</h3>
                    <h3 className="text-6xl mt-3 font-bold text-slate-400">Programador <span className="text-secondary relative transition-all  hover:after:absolute  hover:after:bottom-0  hover:after:left-0  hover:after:w-full hover:after:h-1  hover:after:bg-secondary border-secondary  hover:-top-2">Web</span>.</h3>
                    <h3 className="mt-5 max-w-[450px] text-slate-400">Sou um estudante e profissional da computação! Amante de tecnologia e apaixonado pela musica.</h3>
                </div>
                <Button containerClassName="mt-5">Ver mais</Button>
            </div>
        </div>
    )
}