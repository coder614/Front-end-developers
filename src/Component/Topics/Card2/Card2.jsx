import React from 'react'
import { NavLink } from 'react-router-dom'

function Card2(prop) {
    return (
        <>
            <div className="card">
                <h1 className='topic'>{prop.Topic} {prop.icon}</h1>
                <h1 className='title'>In this card you will get all the complete front end development projects which will be sufficient for you in your front end development journey.</h1>
                <NavLink to={prop.goto} target='_blank'>Start making</NavLink>
            </div>
        </>
    )
}

export default Card2