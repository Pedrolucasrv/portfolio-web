import { Repos } from "@/src/types/githubTypes"
import { Button } from "../Button"

type Props = {
    repo: Repos
}

const RepoCard = (props: Props) => {
    return(
        <div className="bg-secondary rounded-md h-full">
            
            <div className="bg-neutral-50 rounded-md justify-between flex flex-col w-full h-full py-5 px-3 text-accent transition-all cursor-pointer hover:-translate-y-1 hover:translate-x-1"> 
                <div className="">
                    <p className="font-semibold">{props.repo.name}</p>
                    <p className="my-5  text-sm pl-2 border-l-secondary border-l-[4px] before:">{props.repo.description}</p>
                </div>
                <div className=" justify-self-end">
                    <Button className="bg-neutral-50">Ver Mais</Button>
                </div>
            </div>
        </div>
    )
}

export default RepoCard