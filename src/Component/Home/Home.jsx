import React from 'react'
import { NavLink } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'

function Home() {

  return (
    <>
      <div className="home">
        <div className="home-box">
          <h1 className='font-extrabold text-5xl header'>Learn Front-end Development</h1>
          <h1 className='text-base mt-2 font-medium w-3/4 m-auto'>Front End Development is a very good UI development course through which you can move forward in your web development journey.</h1>
          <h1 className='font-bold text-2xl mt-5 mb-9 coutext'>You will learn these things in this Course{' '}
            <span className='text-orange-600 text-4xl'>
              <Typewriter
                words={['HTML', 'CSS', 'Javascript', 'Bootstrap 5', 'TailwindCSS', 'React.js', 'Git & Github', 'Projects']}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <NavLink className='btn' to='/Topics'>Start Learning <i class="ri-arrow-right-line"></i></NavLink>
        </div>
      </div>
    </>
  )
}

export default Home