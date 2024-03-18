import React from 'react'
import photo from './img/myphoto.jpg'
import { NavLink } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <>
      <div className="about">
        <div className="abouttext">
          <div className="abouttext-left">
            <img src={photo} alt="" />
          </div>
          <div className="abouttext-right">
            <h1 className='font-extrabold text-4xl mb-5'>About this website</h1>

            <p className='font-semibold text-xl mb-4 text-justify'>Hii guys! I am junesh soni. I live in new delhi india. I study in BCA second year. I created this website for front end developer students.This website has been created for the purpose of teaching front and development to those who want free resources and free course In this website you will get complete course of all the topics in front end development. Also, as many videos as I have used from the YouTube channel of the people have been posted on the website, please visit them once, you will definitely visit them, they are the best teachers in the field of coding.</p>

            <h1 className='font-medium text-lg'>If you want any project related to front end development then visit this get sub repository page : <NavLink className='underline decoration-2 text-red-700 text-xl' to='https://github.com/keshavgbpecdelhi/Web-Development/tree/master?tab=readme-ov-file#web-development' target='_blank'>Projects Rep</NavLink> </h1>

            <h1 className='font-semibold text-3xl mt-9 sm'>
              Social media :
              <NavLink to='https://www.instagram.com/junesh_soni?igsh=MWdvc3M0NTg3ZzlnZA==' target='_blank'><i class="ri-instagram-line"></i></NavLink>
              <NavLink to='https://x.com/King76218721?t=4BonQJoehjvgMBfKLb6_1Q&s=09' target='_blank'><i class="ri-twitter-x-fill"></i></NavLink>
              <NavLink to='https://github.com/coder614' target='_blank'><i class="ri-github-fill"></i></NavLink>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default About