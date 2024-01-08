"use client";
import Image from "next/image";
import {
  DiReact,
  DiJsBadge,
  DiGitBranch,
  DiHtml5,
  DiMysql,
  DiPhp,
  DiNodejsSmall,
  DiSass,
} from "react-icons/di";
import { SiCssmodules, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";
import Pedro from "@/src/assets/pedro.jpg";
import { motion } from "framer-motion";
import FadeUp from "@/src/components/Animations/FadeUp";
import Marquee from "react-fast-marquee";
import styles from "../Experiences/sections/alienlab/styles.module.css";

export const Description = () => {
  return (
    <div
      id="sobre"
      className="min-h-screen bg-black border-t-2 border-secondary  py-10 flex items-center justify-center overflow-x-clip"
    >
      <div className="w-full  ">
        <Marquee direction="right" style={{ gap: 110 }}>
          <p
            className={`${styles.companyTitle} mb-3 md:mb-0 italic font-extrabold outline-2 outline-red-700 stroke-2 stroke-red-700 text-[100pt] md:text-[250pt] mt-10 md:mt-0 `}
          >
            SOBRE MIM
          </p>
        </Marquee>
        <div className="max-w-[1500px] mx-auto px-5">
          <FadeUp>
            <div className="bg-secondary relative z-10">
              <div className="grid grid-cols-12 -translate-y-1 translate-x-1 border-secondary bg-[#0e0e0e] border-2">
                <div className="lg:col-span-6 col-span-12 px-5">
                  <div className="flex flex-col py-5 lg:py-0 w-full justify-center h-full">
                    <p className="relative font-semibold text-3xl before:absolute before:left-0 before:bg-secondary before:h-full">
                      <span className="text-secondary">Quem</span> eu sou?
                    </p>
                    <div className="flex gap-2">
                        <span className="mt-5">👋</span>
                        <p className="mt-5">
                        Olá! Meu nome é <span className="text-secondary">Pedro Lucas</span>, um dev front-end apaixonado por criar
                        experiências web. Minha jornada tecnológica permeia
                        ReactJS, Tailwind e PHP ( mas aceito desafios 👀 ).
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <span className="mt-5">🚀</span>
                        <p className="mt-3">
                        Creio que sou uma pessoa proativa e tento buscar
                        constantemente soluções criativas e eficazes. Adoro
                        desafios e estou sempre buscando maneiras de melhorar como
                        um profissional.
                        </p>
                    </div>

                    {/* <p className="mt-3 mb-5">
        🎵 Além do mundo da programação, sou um amante da música. Acredito que a criatividade e paz que a música me proporciona também me ajuda profissionalmente no dia a dia.
                                            </p> */}
                    <div className="grid grid-cols-2">
                      <div className="col-span-12 lg:col-span-1">
                        <div className="my-5">
                          <p className="relative text-3xl before:absolute before:left-0 before:bg-secondary before:h-full">
                            Minha{" "}
                            <span className="text-secondary font-semibold">
                              Stack
                            </span>
                          </p>
                          <div className="flex items-center mt-3 gap-3">
                            <div className="hover:-translate-y-1 transition">
                              <DiReact
                                style={{ color: "#FFC800", fontSize: "2.5em" }}
                              ></DiReact>
                            </div>
                            <div className="hover:-translate-y-1 transition">
                              <SiTypescript 
                                style={{ color: "#FFC800", fontSize: "2em" }}
                              ></SiTypescript >
                            </div>
                            <div className="hover:-translate-y-1 transition">
                              <SiTailwindcss
                                style={{ color: "#FFC800", fontSize: "2.5em" }}>
                              </SiTailwindcss >
                            </div>
                           
                            <div className="hover:-translate-y-1 transition">
                              <SiCssmodules 
                                style={{ color: "#FFC800", fontSize: "2.5em" }}
                              ></SiCssmodules >
                            </div>
                            <div className="hover:-translate-y-1 transition">
                              <DiGitBranch
                                style={{ color: "#FFC800", fontSize: "2.5em" }}
                              ></DiGitBranch>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-1">
                        <div className="my-5">
                          <p className="relative text-3xl before:absolute before:left-0 before:bg-secondary before:h-full">
                            Outros{" "}
                            <span className="text-secondary font-semibold">
                              conhecimentos
                            </span>
                          </p>
                          <div className="flex items-center mt-3 gap-3">
                            <div className="hover:-translate-y-1 transition">
                              <DiPhp
                                style={{ color: "#FFC800", fontSize: "2.5em" }}
                              ></DiPhp>
                            </div>
                            <div className="hover:-translate-y-1 transition">
                              <DiNodejsSmall
                                style={{ color: "#FFC800", fontSize: "2em" }}
                              ></DiNodejsSmall>
                            </div>
                            <div className="hover:-translate-y-1 transition">
                              <DiSass
                                style={{ color: "#FFC800", fontSize: "2.5em" }}
                              ></DiSass>
                            </div>
                            <div className="hover:-translate-y-1 transition">
                              <SiPrisma 
                                style={{ color: "#FFC800", fontSize: "2.5em" }}
                              ></SiPrisma >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6  col-span-12 -order-1  lg:order-1 relative">
                  <div className="md:bg-secondary mx-auto flex justify-center relative  pl-1">
                    <Image
                      style={{ objectFit: "contain" }}
                      src={Pedro}
                      alt=""
                    ></Image>
                  </div>
                  <div
                    className="absolute h-[215px] -z-10 md:z-10 w-[273px] -top-20 -right-14"
                    style={{
                      background: "transparent",
                      backgroundImage:
                        "radial-gradient(#FFC800 4px, transparent 0)",
                      backgroundSize: "41px 41px",
                      backgroundPosition: "-25px -25px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};
