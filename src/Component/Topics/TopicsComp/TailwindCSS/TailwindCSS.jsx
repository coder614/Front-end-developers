import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './TailwindCSS.css'

function TailwindCSS() {
  return (
    <>
      <div className="TailwindCSS">
        <div className="TailwindCSSContant">
          <div className="TailwindCSSVideo">
            <ReactPlayer className='border-8 border-black rounded-lg' controls url='https://youtu.be/Sae1MD5E5p8?si=di-n1hh9sfuPJ8Fm' width='100%' height='100%' />
          </div>
          <div className="TailwindCSSText">
            <h1 className='text-3xl font-medium text-justify'>This is the complete TailwindCSS course by <span className='text-orange-500'>WsCube Tech</span>. In this video you can learn everything about TailwindCSS. I have uploaded this video from WsCube Tech YouTube channel. Please visit the channel. And also you will get many good content related to coding.</h1>

            <h1 className='mt-5 font-medium text-xl'>Visit now <NavLink className='underline decoration-2 text-red-500 text-2xl' to='https://www.youtube.com/@wscubetech' target='_blank'>WsCube Tech</NavLink></h1>
          </div>
        </div>
        <div className="TailwindCSSDom">
          <h1 className='text-2xl font-medium mt-9'>This is the TailwindCSS Website visit : <NavLink className='underline decoration-2 text-blue-700' to='https://tailwindcss.com/' target='_blank'>TailwindCSS</NavLink></h1>
          <h1 className='font-medium'>This is the best video for TailwindCSS course. If you complete this video then you will have complete knowledge of TailwindCSS</h1>
        </div>
      </div>
    </>
  )
}

export default TailwindCSS