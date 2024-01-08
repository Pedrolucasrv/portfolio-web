"use client";

import { Button } from "@/src/components/Button";
import RepoCard from "@/src/components/RepoCard";
import { getRepos } from "@/src/services/githubServices";
import { Repos } from "@/src/types/githubTypes";
import styles from '@/app/(Home)/components/Experiences/sections/alienlab/styles.module.css'
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { IoLogoGithub } from "react-icons/io";

export const Repositories = () => {
  const [repos, setRepos] = useState<Repos[]>();
  const [reposLenght, setReposLenght] = useState<number>(8);

  useEffect(() => {
    getRepos().then((repos) => {
      setRepos(repos);
    });
  }, []);

  return (
    <>
      <div id="trabalho" className="bg-neutral-900 relative py-40">
        <Marquee autoFill  direction="right" className="flex gap-5">
            <h2 className={` ${styles.headlineAlt} text-[40pt] uppercase font-semibold italic `}>PROJETOS <span className="text-[40pt] uppercase font-semibold italic mx-3">*</span></h2>
        </Marquee>
        <Marquee autoFill  direction="left" className="flex gap-5">
            <h2 className={` ${styles.headlineAlt} text-[40pt] uppercase font-semibold italic `}>PROJETOS <span className="text-[40pt] uppercase font-semibold italic mx-3">*</span></h2>
        </Marquee>
        {/* <div className="container relative items-end gap-4 e z-10 flex px-5 pb-1 mx-auto">
          <h3 className="text-white before:absolute before:bottom-0 before:w-[80%] before:-left-2 before:h-2 before:bg-secondary before:-z-20 relative -z-10 font-semibold text-5xl">
            Projetos
          </h3>
        </div> */}
        <div className="container relative  items-end gap-4 e z-10 flex px-5 pb-10 mx-auto">
          <small className="text-zinc-400">
            (ou tudo que tem no meu github)
          </small>
        </div>
        <div className="container relative z-20 px-5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {repos?.slice(0, reposLenght).map((repos) => {
            return <RepoCard key={repos.id} repo={repos} />;
          })}
        </div>
        <div className="flex w-full justify-center mt-10">
          {repos && reposLenght < repos?.length && (
            <Button
              onClick={() =>
                setReposLenght((anterior) => {
                  return anterior + 4;
                })
              }
              className="bg-neutral-900"
            >
              Ver Mais
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
