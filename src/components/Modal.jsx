import React,{useState} from 'react'
import {TiDelete} from 'react-icons/ti'
import { createPortal } from 'react-dom'
import useReposContext from '../hooks/useReposContext'


function Modal({handleSubmit, setModal}) {
    const [nameRepos, setNameRepos] = useState('');
    const {setLoading, repos} = useReposContext();
    
    const handleRepos = ()=>{
        let count = repos.length;
        count++;
        repos.push({id:count,titleRepos : nameRepos});
        setLoading(true);
        setModal(false); 
    }

    const handleChange = (e)=>{
        const {value} = e.target;
        setNameRepos(value);
    }

    return (
        <div>
            {createPortal(
            <div className='w-100 h-100 bg-slate-800 border-3 flex justify-center items-center'>
                <input type="text" name="txtCreate" className='text-slate-900' onChange={handleChange}/>
                <input className='p-5 hover:text-teal-500' type="submit" value="Add Repos" onClick = {handleRepos} />
                <TiDelete size={'30px'} onClick = {handleSubmit}/>
            </div>
            , document.body)}
        </div>
    )
}

export default Modal

