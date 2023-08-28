'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';
import alienlab from '@/src/assets/alienlab/logo.svg'
import ip4y from '@/src/assets/ip4y/logo.svg'
import dinari from '@/src/assets/dinari/big-dinari-logo.svg'
import { Tag } from '@/src/components/Tag';
import { Button } from '@/src/components/Button';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75.1%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh] bg-secondary">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-1">
            <div className="group px-3 relative flex flex-col items-center justify-center bg-black h-[100vh] w-[100vw] overflow-hidden ">
                <Image src={alienlab} alt='' ></Image>
                <p className='mt-3 '>Estágio em desenvolvimento <span className='text-secondary font-semibold'>Front-End</span></p>
                <p className='mt-3 '>2021 | 2022</p>
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
                </div>
            </div>
            <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0)), url(/ip4y/bg.png)', backgroundSize:'cover'}} className="group px-3   relative flex flex-col items-center justify-center  h-[100vh] w-[100vw] overflow-hidden bg-transparent">
                <Image src={dinari} alt='' height={70} ></Image>
                <p className='mt-3 '>Estágio em desenvolvimento <span className='text-secondary font-semibold'>Front-End</span></p>

                <p className='mt-3 '>2022 | 2023</p>
                <div className='flex gap-3 my-5 flex-wrap justify-center max-w-[400px]'>
                    <Tag>Laravel</Tag>
                    <Tag>PHP</Tag>
                    <Tag>MySql</Tag>
                </div>
                <div className='w-full absolute opacity-70 '>
                    
                </div>
            </div>
            <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0)), url(/ip4y/bg.png)', backgroundSize:'cover'}} className="group px-3   relative flex flex-col items-center justify-center  h-[100vh] w-[100vw] overflow-hidden bg-transparent">
                <Image src={ip4y} alt='' height={70} ></Image>
                <p className='mt-3 '>Desenvolvedor <span className='text-secondary font-semibold'>Full-Stack</span> Junior</p>
                <p className='mt-3 '>2023 | <span className="text-secondary font-semibold"> Atualmente</span></p>
                <div className='flex gap-3 my-5 flex-wrap justify-center max-w-[400px]'>
                    <Tag>Laravel</Tag>
                    <Tag>ReactJs</Tag>
                    <Tag>React Native</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>Css.Modules</Tag>
                </div>
                <div className='w-full absolute opacity-70 '>
                    
                </div>
            </div>
           
            <div className="group relative flex flex-col items-start  justify-center  h-[100vh] w-[100vw] overflow-hidden bg-neutral-900 ">
                <div className='pl-20'>

                    <p className='text-2xl mb-4'>A próxima pode ser <span className='text-secondary font-semibold'>sua empresa!</span></p>
                    <Button>Entrar em contato</Button>
                </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  const Card = ( card : {url:string, title:string, id: string}) => {
    return (
      <div
        key={card.id}
        className="group relative h-[100vh] w-[100vw] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };
  
  export default HorizontalScroll
  
  const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "Title 2",
      id: 2,
    }
  ];