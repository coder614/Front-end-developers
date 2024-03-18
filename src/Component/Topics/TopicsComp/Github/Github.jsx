import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './Github.css'

function Github() {
  return (
    <>
      <div className="Github">
        <div className="GithubContant">
          <div className="GithubVideo">
            <ReactPlayer className='border-8 border-black rounded-lg' controls url='https://youtu.be/Ez8F0nW6S-w?si=UvJzdmscpEqrTKku' width='100%' height='100%' />
          </div>
          <div className="GithubText">
            <h1 className='text-3xl font-medium text-justify'>This is the complete Git & Github course by <span className='text-orange-500'>Apan College</span>. In this video you can learn everything about Git & Github. I have uploaded this video from Apan College YouTube channel. Please visit the channel. And also you will get many good content related to coding.</h1>

            <h1 className='mt-5 font-medium text-xl'>Visit now <NavLink className='underline decoration-2 text-red-500 text-2xl' to='https://www.youtube.com/@ApnaCollegeOfficial' target='_blank'>Apan College</NavLink></h1>
          </div>
        </div>
        <div className="GithubDom">
          <h1 className='font-medium'>This is the best video for Git & Github course. If you complete this video then you will have complete knowledge of Github</h1>
        </div>
      </div>
    </>
  )
}

export default Github