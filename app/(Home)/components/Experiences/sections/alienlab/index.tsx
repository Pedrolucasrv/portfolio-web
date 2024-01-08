import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "@/src/assets/alienlab/logo.svg";
import { Button } from "@/src/components/Button";
import { Tag } from "@/src/components/Tag";

export default function AlienLab() {
  return (
    <div className="group  relative flex flex-col items-center  bg-black min-h-[980px] md:min-h-[100vh] w-[100vw]   ">
      <div className=" top-0">
        <Marquee>
          <p
            className={`${styles.companyTitle} italic font-extrabold text-center outline-2 outline-red-700 stroke-2 stroke-red-700  text-[100pt] md:text-[250pt] mt-10 md:mt-0 `}
          >
            &nbsp;ALIEN LAB&nbsp;
          </p>
        </Marquee>
      </div>
      <div
        className={`${styles.darkBg} px-5 py-10 md:py-3  mt-auto w-full relative z-10 border-y-[1px] border-secondary`}
      >
        <div className="container h-full xl:flex  justify-between mx-auto">
          <div className="flex xl:block justify-center">
            <p className="mb-2 hidden xl:block">Empresa:</p>
            <Image src={logo} alt="" height={60}></Image>
          </div>
          <div>
            <span className="mb-2 hidden xl:block">Cargo:</span>
            <p className="mt-3 text-center xl:text-left ">
              Estágio em desenvolvimento
              <span className="text-secondary font-semibold ">
                <br className="md:hidden"></br> Front-End
              </span>
            </p>
          </div>
          <div>
            <span className="mb-2 hidden xl:block">Período:</span>

            <p className="mt-3 text-center xl:text-left ">2021 | 2022</p>
          </div>
          <div className="flex justify-center xl:block">
            <span className="mb-2 hidden xl:block">Habilidades:</span>

            <div className="flex gap-3 my-5 flex-wrap justify-center xl:justify-start max-w-[400px]">
              <Tag>Wordpress</Tag>
              <Tag>ReactJs</Tag>
              <Tag>GSAP</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Css.Modules</Tag>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-0 scale-125 rotate-[-10deg]">
        {Array(19).fill(
          <p
            className={` ${styles.companyBg} whitespace-nowrap overflow-hidden italic`}
          >
            ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB
            ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB
            ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB
            ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB
            ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB ALIENLAB
          </p>
        )}
      </div>

      {/* <Image src={alienlab} alt='' ></Image>
          <p className='mt-3 text-center md:text-left '>Estágio em desenvolvimento <span className='text-secondary font-semibold '><br className="md:hidden"></br>Front-End</span></p>
          <p className='mt-3 text-center md:text-left '>2021 | 2022</p>
          <div className='flex gap-3 my-5 flex-wrap justify-center max-w-[400px]'>
              <Tag>Wordpress</Tag>
              <Tag>ReactJs</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Sass</Tag>
              <Tag>Css.Modules</Tag>
          </div>
          <div className='w-full absolute opacity-70 '>
              <video className='absolute left-0  right-0 mx-auto top-[20vh] md:top-[15vh]' autoPlay muted loop>
                  <source src='planete-video.mp4' type="video/mp4" />
              </video>
          </div> */}
    </div>
  );
}
