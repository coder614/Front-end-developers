import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './Javascriptcard.css'

function Javascriptcard(prop) {
    return (
        <>
            <div className="javascriptcard">
                <div className="left-javascriptcard">
                    <ReactPlayer className='border-4 border-black rounded-lg' controls url={prop.src} width='100%' height='100%' />
                </div>
                <div className="right-javascriptcard">
                    <h1 className='text-2xl font-bold my-3'>Lecture {prop.lecture}:</h1>
                    <h1 className='text-xl font-medium my-2'>In this video you can learn {prop.topic}</h1>
                    <h1 className='mt-4'>I have uploaded this video from Apan College YouTube channel. Please visit the channel. And also you will get many good content related to coding.</h1>
                    <h1 className='mt-5 font-medium text-xl'>Visit now <NavLink className='underline decoration-2 text-red-500 text-2xl' to='https://www.youtube.com/@ApnaCollegeOfficial' target='_blank'>Apan College</NavLink></h1>
                </div>
            </div>
        </>
    )
}

export default Javascriptcard