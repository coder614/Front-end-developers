import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './Bootstrap.css'


function Bootstrap() {
  return (
    <>
      <div className="Bootstrap">
        <div className="BootstrapContant">
          <div className="BootstrapVideo">
            <ReactPlayer className='border-8 border-black rounded-lg' controls url='https://youtu.be/cfg9_cp4zGk?si=n6JI0vHmwTRegqeq' width='100%' height='100%' />
          </div>
          <div className="BootstrapText">
            <h1 className='text-3xl font-medium text-justify'>This is the complete Bootstrap 5 course by <span className='text-orange-500'>Thapa Technical</span>. In this video you can learn everything about Bootstrap 5. I have uploaded this video from Thapa Technical YouTube channel. Please visit the channel. And also you will get many good content related to coding.</h1>

            <h1 className='mt-5 font-medium text-xl'>Visit now <NavLink className='underline decoration-2 text-red-500 text-2xl' to='https://www.youtube.com/@ThapaTechnical' target='_blank'>Thapa Technical</NavLink></h1>
          </div>
        </div>
        <div className="BootstrapDom">
          <h1 className='text-2xl font-medium mt-9'>This is the Bootstrap Website visit : <NavLink className='underline decoration-2 text-blue-700' to='https://getbootstrap.com/' target='_blank'>Bootstrap 5</NavLink></h1>
          <h1 className='font-medium'>This is the best video for Bootstrap 5 course. If you complete this video then you will have complete knowledge of Bootstrap</h1>
        </div>
      </div>
    </>
  )
}

export default Bootstrap