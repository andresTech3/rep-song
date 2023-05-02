import React from 'react'
import NavBarSong from './NavBarSong'

function Song() {
    return (
        <div className='flex flex-row '>
            <NavBarSong/>
            {/* content */}
            <div className='w-96 bg-white text-slate-700 p-4 m-auto mt-14'>
                <h2 className='text-3xl text-teal-500'>Title Song...</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat impedit asperiores, dolor cum est nulla ullam molestias ipsa. Magni vel ipsum quod nulla consequuntur aperiam quia officiis, voluptates esse, dolorem quae magnam doloribus commodi quaerat repellendus cupiditate minus fugiat odio deleniti omnis? Esse officia libero ab qui natus quam, incidunt, eum voluptates dolores impedit est dolorem, facilis fugiat provident. Unde porro in quis soluta error eos, quaerat itaque illum ea placeat accusamus repellat perspiciatis reiciendis ipsa nulla officiis possimus cum tempore omnis debitis asperiores voluptate dolorum illo! Temporibus hic rem dolor exercitationem dolore provident sint error ipsum officiis deleniti.</p>
            </div>
        </div>
    )
}

export default Song
