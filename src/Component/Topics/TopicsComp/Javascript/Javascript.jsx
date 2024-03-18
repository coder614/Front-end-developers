import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import './javascript.css'
import Javascriptcard from './Javascriptcard/Javascriptcard.jsx'

function Javascript() {
  return (
    <>
      <div className="javascript">
        <h1 className='text-center text-4xl font-semibold mb-6'>Complete Javascript course</h1>
        <div className="javascriptbox">
          <Javascriptcard src='https://youtu.be/ajdRvxDWH4w?si=FTbNxTI_zkyWpNuQ' lecture='1' topic='Introduction To Javascript and Variables & Data Types.' />
          <Javascriptcard src='https://youtu.be/Zg4-uSjxosE?si=0hKEQ04l1NEOx9Tu' lecture='2' topic='Operators and Conditional Statements.' />
          <Javascriptcard src='https://youtu.be/UmRtFFSDSFo?si=OHVc7dIlBL28TwRG' lecture='3' topic='Loops and Strings.' />
          <Javascriptcard src='https://youtu.be/gFWhbjzowrM?si=aV6ObFMDCE7OBl89' lecture='4' topic='Complete Array in Javascript.' />
          <Javascriptcard src='https://youtu.be/P0XMXqDGttU?si=48IVTG1RskIq9j63' lecture='5' topic='Functions & Methods in Javascript.' />
          <Javascriptcard src='https://youtu.be/7zcXPCt8Ck0?si=eHFcroXFrVs1PbTq' lecture='6' topic='DOM - Document Object Model.' />
          <Javascriptcard src='https://youtu.be/fXAGTOZ25H8?si=d75nshnJa3TP9q7T' lecture='7' topic='DOM (Part 2) | Document Object Model.' />
          <Javascriptcard src='https://youtu.be/_i-uLJAh79U?si=XYw4FUiCBli37RiP' lecture='8' topic='Events in JavaScript.' />
          <Javascriptcard src='https://youtu.be/SqrppLEljkY?si=W16HonglB-JNSPzs' lecture='9' topic='Tic Tac Toe Game in JavaScript | JS Project.' />
          <Javascriptcard src='https://youtu.be/_V33HCZWLDQ?si=BxrDwamhif_lKRR-' lecture='10' topic='MiniProject - Stone, Paper & Scissors Game.' />
          <Javascriptcard src='https://youtu.be/N-O4w6PynGY?si=33qLMXHAedcfSNfc' lecture='11' topic='Classes & Objects in Javascript.' />
          <Javascriptcard src='https://youtu.be/d3jXofmQm44?si=JVKpsPzY9ljlkbut' lecture='12' topic='Callbacks, Promises & Async Await.' />
          <Javascriptcard src='https://youtu.be/CyGodpqcid4?si=Zz8YU3WBKsvwWRX-' lecture='13' topic='Fetch API with Project.' />
        </div>
      </div>
    </>
  )
}

export default Javascript