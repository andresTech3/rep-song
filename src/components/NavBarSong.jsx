import React from 'react';

import {BsFillFileEarmarkMusicFill} from 'react-icons/bs';

function NavBarSong() {
    return (
        <div className='w-24 h-full mt-5 flex flex-row bg-teal-500 p-5 justify-center'>
            <div className='w-100'>
                <BsFillFileEarmarkMusicFill className='m-auto' size={"30"}/>
                <p>Song</p>
            </div>
        </div>
    )
}

export default NavBarSong
