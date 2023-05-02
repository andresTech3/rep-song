import React, {useState, useEffect} from 'react'
import ReposContext from '../context/ReposContext';
import BtnCreate from './BtnCreate'
import ReposSong from './ReposSong'
import repos from '../json/respos'
import PageMusic from '../containers/PageMusic'


function NavRepos() {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false)
    },[loading])

    
    return (
        <ReposContext.Provider value={{repos, setLoading}}>
            <div className='bg-teal-500 w-100 h-16 flex items-center'>
                <h1 className='2xl pl-2 inline-block'>GALILEA MUSIC</h1>
                <BtnCreate styled={'pl-10 border-0 outline-0 mr-16'}/>
                {
                    repos.map((repo, index) =>{
                        return (<ReposSong 
                            key = {index}  
                            titleRepos = {repo.titleRepos} 
                            id={repo.id}>
                                <PageMusic/>
                            </ReposSong>
                            )
                    })
                }
            </div>
        </ReposContext.Provider>
    )
}

export default NavRepos

