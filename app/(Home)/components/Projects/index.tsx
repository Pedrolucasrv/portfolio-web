'use client'

import RepoCard from '@/src/components/RepoCard'
import { getRepos } from '@/src/services/githubServices'
import { Repos } from '@/src/types/githubTypes'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Repositories = () => {
    const [ repos , setRepos ] = useState<Repos[]>()

    useEffect(() =>{
        getRepos().then((repos) => {
            setRepos(repos)
        })
    },[])

    return(
        <>  
            <div className='bg-accent  pt-40'>
                
                    <div className='container relative z-10 flex px-5 pb-10 mx-auto'>
                        <h3 className='text-white before:absolute before:bottom-0 before:w-[80%] before:-left-2 before:h-2 before:bg-secondary before:-z-20 relative -z-10 font-semibold text-5xl'>Projetos</h3>
                    </div>
                <div className='container px-5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                        {repos?.map((repos) => {
                            return <RepoCard key={repos.id} repo={repos}  />
                        } )}
                </div>
            </div>
        </>
    )

}