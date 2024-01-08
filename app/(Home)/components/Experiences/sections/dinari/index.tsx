import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "@/src/assets/dinari/Logo.svg";
import mainLogo from "@/src/assets/dinari/big-dinari-logo.svg";
import { Tag } from "@/src/components/Tag";

export default function Dinari() {
  return (
    <div className="group  relative flex flex-col items-center  bg-black min-h-[980px] md:min-h-[100vh] w-[100vw]   ">
      <div className=" top-0">
        <Marquee direction="right" style={{ gap: 110 }}>
          <p
            className={`${styles.companyTitle} italic font-extrabold outline-2 outline-red-700 stroke-2 stroke-red-700  text-[100pt] md:text-[250pt] mt-10 md:mt-0 `}
          >
            &nbsp;DINARI PAY&nbsp;
          </p>
        </Marquee>
      </div>
      <div
        className={`${styles.darkBg} py-3 mt-auto w-full relative z-10 border-y-[1px] border-secondary`}
      >
        <div className="container h-full xl:flex  justify-between mx-auto">
          <div className="flex xl:block justify-center">
            <p className="mb-2 hidden xl:block">Empresa:</p>
            <Image src={mainLogo} alt="" height={70}></Image>
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
            <p className="mt-3 text-center xl:text-left ">2022 | 2023</p>
          </div>
          <div className="flex justify-center xl:block">
            <span className="mb-2 hidden xl:block">Habilidades:</span>
            <div className="flex gap-3 my-5 flex-wrap justify-center xl:justify-start max-w-[400px]">
              <Tag>Laravel</Tag>
              <Tag>ReactJs</Tag>
              <Tag>TypeScript</Tag>
              <Tag>PHP</Tag>
              <Tag>MySql</Tag>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-36 scale-125 rotate-[15deg]">
        {Array(20).fill(
          <p
            className={` ${styles.companyBg} whitespace-nowrap overflow-hidden italic`}
          >
            DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI
            DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI
            DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI
            DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI DINARI
            DINARI DINARI DINARI DINARI
          </p>
        )}
      </div>
      <div className="absolute bottom-[250px] md:bottom-[200px] xl:bottom-0 right-[-200px] md:right-[70%] ">
        <Image
          src={logo}
          className="hue-rotate-[233deg] h-[400px] md:h-auto"
          alt=""
        ></Image>
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
