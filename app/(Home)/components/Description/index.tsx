import Image from "next/image";
import { DiReact, DiJsBadge, DiGitBranch, DiHtml5, DiMysql, DiPhp, DiNodejsSmall, DiSass } from "react-icons/di";
import Pedro from '@/src/assets/pedro.jpg' 

export const Description = () => {
    return(
        <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
            <div className="w-full  max-w-[1500px]">

                <div className="grid grid-cols-12 border-secondary border-2">
                    <div className="col-span-6 px-5">
                        <div className="flex flex-col w-full justify-center h-full">
                            <p className="relative font-semibold text-3xl before:absolute before:left-0 before:bg-secondary before:h-full">
                                <span className="text-secondary">Quem</span> eu sou?
                            </p>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero iure! Soluta eligendi quisquam fuga dolorem veniam velit itaque libero eum, nemo accusamus dignissimos adipisci excepturi, commodi nostrum eveniet facere. Reprehenderit provident magnam quo architecto sit, dolores porro rem ipsum iusto pariatur perspiciatis beatae laborum eos corporis nesciunt hic ex!
                            </p>
                            <p></p>
                            <div className="grid grid-cols-2">
                                <div className="col-span-1">

                                <div className="my-5">

                                    <p className="relative text-3xl before:absolute before:left-0 before:bg-secondary before:h-full">
                                        Minha <span className="text-secondary font-semibold">Stack</span>
                                    </p>
                                    <div className="flex items-center mt-3 gap-3">
                                        <div className="hover:-translate-y-1 transition">
                                            <DiReact style={{ color: "#FFC800", fontSize: "2.5em" }}></DiReact>
                                        </div>
                                        <div className="hover:-translate-y-1 transition">
                                            <DiJsBadge style={{ color: "#FFC800", fontSize: "2em" }}></DiJsBadge>
                                        </div>
                                        <div className="hover:-translate-y-1 transition">
                                            <DiGitBranch style={{ color: "#FFC800", fontSize: "2.5em" }}></DiGitBranch>
                                        </div>
                                        <div className="hover:-translate-y-1 transition">
                                            <DiHtml5 style={{ color: "#FFC800", fontSize: "2.5em" }}></DiHtml5>
                                        </div>
                                        <div className="hover:-translate-y-1 transition">
                                            <DiMysql style={{ color: "#FFC800", fontSize: "2.5em" }}></DiMysql>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-span-1">

                                <div className="my-5">

                                    <p className="relative text-3xl before:absolute before:left-0 before:bg-secondary before:h-full">
                                        Outros <span className="text-secondary font-semibold">conhecimentos</span>
                                    </p>
                                    <div className="flex items-center mt-3 gap-3">
                                        <div className="hover:-translate-y-1 transition">
                                            <DiPhp style={{ color: "#FFC800", fontSize: "2.5em" }}></DiPhp>
                                        </div>
                                        <div className="hover:-translate-y-1 transition">
                                            <DiNodejsSmall style={{ color: "#FFC800", fontSize: "2em" }}></DiNodejsSmall>
                                        </div>
                                        <div className="hover:-translate-y-1 transition">
                                            <DiSass style={{ color: "#FFC800", fontSize: "2.5em" }}></DiSass>
                                        </div>

                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="bg-secondary relative  pl-1">
                            <Image style={{objectFit:"contain"}} src={Pedro} alt="" ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}