import React from 'react'
import { useState } from 'react'
import {AiFillFileAdd} from 'react-icons/ai'
import Modal from './Modal'

function BtnCreate({styled}) {

    const [modal, setModal] = useState(false)

    const handleSubmit = () =>{
        setModal(!modal)
    }

    return (
        <div>
            <button type='submit' onClick={handleSubmit} className={styled}>
                <AiFillFileAdd size={'25px'}/>
            </button>

            {modal && <Modal handleSubmit = {handleSubmit}  setModal={setModal} />}
        </div>
    )
}

export default BtnCreate


