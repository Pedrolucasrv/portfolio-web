import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "@/src/assets/ip4y/logo.svg";
import phone from "@/src/assets/ip4y/phone.png";
import { Tag } from "@/src/components/Tag";

export default function IP() {
  return (
    <div className="group relative flex flex-col items-center  bg-black min-h-[980px] md:min-h-[100vh]  w-[100vw]   ">
      <div className=" top-0 w-full">
        <Marquee autoFill>
          <p
            className={`${styles.companyTitle} italic font-extrabold outline-2 outline-red-700 stroke-2 stroke-red-700  text-[100pt] md:text-[250pt] mt-10 md:mt-0 `}
          >
            &nbsp;IP4Y &nbsp;
          </p>
        </Marquee>
      </div>
      <div
        className={`${styles.darkBg} py-3  mt-auto w-full relative z-10 border-y-[1px] border-secondary`}
      >
        <div className="container h-full xl:flex  justify-between mx-auto">
          <div className="flex xl:block justify-center">
            <p className="mb-2 hidden xl:block">Empresa:</p>
            <Image src={logo} alt="" height={60}></Image>
          </div>
          <div>
            <span className="mb-2 hidden xl:block">Cargo:</span>
            <p className="mt-3 text-center xl:text-left ">
              Desenvolvedor
              <span className="text-secondary font-semibold ">
                <br className="md:hidden"></br> Full-Stack
              </span>
            </p>
          </div>
          <div>
            <span className="mb-2 hidden xl:block">Período:</span>
            <p className="mt-3 text-center xl:text-left ">
              2023 |{" "}
              <span className="font-semibold text-secondary">Atualmente</span>
            </p>
          </div>
          <div className="flex justify-center xl:block">
            <span className="mb-2 hidden xl:block">Habilidades:</span>
            <div className="flex gap-3 my-5 flex-wrap justify-center xl:justify-start max-w-[400px]">
              <Tag>ReactJs</Tag>
              <Tag>NextJS</Tag>
              <Tag>React Native</Tag>
              <Tag>Framer Motion</Tag>
              <Tag>Laravel</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Css.Modules</Tag>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-0 scale-125 rotate-[-10deg]">
        {Array(20).fill(
          <p
            className={` ${styles.companyBg} whitespace-nowrap overflow-hidden italic`}
          >
            &nbsp;IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y
            IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y
            IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y
            IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y
            IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y IP4Y
          </p>
        )}
      </div>
      <div className="absolute bottom-[250px] md:bottom-0 right-0">
        <Image src={phone} alt="" className="max-h-[650px]  w-auto"></Image>
      </div>
    </div>
  );
}
