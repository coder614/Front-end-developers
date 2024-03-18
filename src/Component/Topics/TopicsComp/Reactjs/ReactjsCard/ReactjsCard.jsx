import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './ReactjsCard.css'

function ReactjsCard(props) {
    return (
        <>
            <div className="ReactjsCard">
                <h1 className='text-2xl font-bold m-1'>Lecture {props.lecture}:</h1>
                <ReactPlayer controls url={props.url} width='100%' />
            </div>
        </>
    )
}

export default ReactjsCard