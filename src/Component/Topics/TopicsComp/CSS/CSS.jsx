import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './CSS.css'

function CSS() {
  return (
    <>
      <div className="css">
        <div className="cssContant">
          <div className="cssVideo">
            <ReactPlayer className='border-8 border-black rounded-lg' controls url='https://youtu.be/ESnrn1kAD4E?si=vl43vl1eXsrh89VA' width='100%' height='100%' />
          </div>
          <div className="cssText">
            <h1 className='text-3xl font-medium text-justify'>This is the complete css course by <span className='text-orange-500'>Apan College</span>. In this video you can learn everything about css. I have uploaded this video from Apan College YouTube channel. Please visit the channel. And also you will get many good content related to coding.</h1>

            <h1 className='mt-5 font-medium text-xl'>Visit now <NavLink className='underline decoration-2 text-red-500 text-2xl' to='https://www.youtube.com/@ApnaCollegeOfficial' target='_blank'>Apan College</NavLink></h1>
          </div>
        </div>
        <div className="cssDom">
          <h1 className='text-2xl font-medium mt-9'>If you want to read best doucuments of this course visit : <NavLink className='underline decoration-2 text-green-600' to='https://www.w3schools.com/css/' target='_blank'>W3school.com</NavLink></h1>
          <h1 className='text-xl font-semibold mt-1'>If you want to CSS pre define components like (button, box shadow, icons, checkboxes, shapes, etc) visit : <NavLink className='underline decoration-2 text-red-800' to='https://getcssscan.com/css-box-shadow-examples' target='_blank'>CSS Scan</NavLink></h1>
          <h1 className='font-medium'>This is the best video for css course. If you complete this video then you will have complete knowledge of css</h1>
        </div>
      </div>
    </>
  )
}

export default CSS