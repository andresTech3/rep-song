import React from 'react'
import {BsFillFileEarmarkMusicFill} from 'react-icons/bs'
import {TiDelete} from 'react-icons/ti'
import useReposContext from '../hooks/useReposContext';

function ReposSong(props) {
    const {titleRepos, id} = props;
    const {setLoading,repos} = useReposContext();
    console.log(id)

    const deleteRepos = (indexDelete)=>{
        const index = repos.indexOf(indexDelete);
        repos.splice(index, 1);
        setLoading(true);
    }

    return (
        <button type='submit'>
            <TiDelete onClick={()=>deleteRepos(repos.length)}/>
            <BsFillFileEarmarkMusicFill className='mx-5' size={'25px'}/>
            <p>{titleRepos}</p>
        </button>
    )
}

export default ReposSong

