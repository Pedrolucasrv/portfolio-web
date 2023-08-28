import { Repos } from "@/src/types/githubTypes"
import { Button } from "../Button"
import { GoLinkExternal } from 'react-icons/go'
import { AiOutlineFolder } from 'react-icons/ai'
import { motion } from "framer-motion"
import FadeUp from "../Animations/FadeUp"
import Link from "next/link"


type Props = {
    repo: Repos
}

const RepoCard = (props: Props) => {

 

    return(
        <FadeUp>
            <Link href={props.repo.html_url} target="_blank" className="bg-secondary rounded-lg h-full">
                
                <div style={{
                    background: 'rgba(47, 47, 47, 1)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter:' blur(11.2px)'
                    
                }} className="bg-[#2f2f2f] rounded-sm backdrop:blur-[7.8px] shadow-md justify-between w-full h-full py-5 px-3 text-white transition-all cursor-pointer hover:-translate-y-1 hover:translate-x-1"> 
                    <div className="flex justify-between pr-3 mb-5">
                        <AiOutlineFolder style={{height:24, width: 24}}></AiOutlineFolder>
                        <GoLinkExternal style={{height:14, width: 14}}></GoLinkExternal>
                    </div>
                    <div className="">
                        <p className="font-semibold">{props.repo.name}</p>
                        <p className="my-5  text-sm pl-2 border-l-secondary border-l-[4px] before:">{props.repo.description}</p>
                    </div>
                
                </div>
            </Link>
        </FadeUp>
    )
}

export default RepoCard