import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

function Card(prop) {
    return (
        <>
            <div className="card">
                <h1 className='topic'>{prop.Topic} {prop.icon}</h1>
                <h1 className='title'>In this course you will learn complete {prop.Topic}. Click on the Start button for start learning</h1>
                <NavLink to={prop.goto}>Start Learning</NavLink>
            </div>
        </>
    )
}

export default Card