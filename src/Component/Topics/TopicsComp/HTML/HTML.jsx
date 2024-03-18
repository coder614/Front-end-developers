import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './HTML.css'

function HTML() {
  return (
    <>
      <div className="html">
        <div className="htmlContant">
          <div className="htmlVideo">
            <ReactPlayer className='border-8 border-black rounded-lg' controls url='https://youtu.be/HcOc7P5BMi4?si=JKAao0NcI4VYzsDU' width='100%' height='100%' />
          </div>
          <div className="htmlText">
            <h1 className='text-3xl font-medium text-justify'>This is the complete HTML course by <span className='text-orange-500'>Apan College</span>. In this video you can learn everything about HTML. I have uploaded this video from Apan College YouTube channel. Please visit the channel. And also you will get many good content related to coding.</h1>

            <h1 className='mt-5 font-medium text-xl'>Visit now <NavLink className='underline decoration-2 text-red-500 text-2xl' to='https://www.youtube.com/@ApnaCollegeOfficial' target='_blank'>Apan College</NavLink></h1>
          </div>
        </div>
        <div className="htmlDom">
          <h1 className='text-2xl font-medium mt-9'>If you want to read best doucuments of this course visit : <NavLink className='underline decoration-2 text-green-600' to='https://www.w3schools.com/html/' target='_blank'>W3school.com</NavLink></h1>
          <h1 className='font-medium'>This is the best video for HTML course. If you complete this video then you will have complete knowledge of HTML</h1>
        </div>
      </div>
    </>
  )
}

export default HTML