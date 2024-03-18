import React from 'react'
import './Topics.css'
import Card from './Card/Card'
import Card2 from './Card2/Card2'

function Topics() {
  return (
    <>
      <div className="topics">
        <Card icon={<i class="ri-html5-fill"></i>} Topic='HTML' goto='/HTML' />
        <Card icon={<i class="ri-css3-fill"></i>} Topic='CSS' goto='/CSS' />
        <Card icon={<i class="ri-javascript-fill"></i>} Topic='Javascript' goto='/Javascript' />
        <Card icon={<i class="ri-bootstrap-line"></i>} Topic='bootstrap 5' goto='/Bootstrap' />
        <Card icon={<i class="ri-tailwind-css-fill"></i>} Topic='TailwindCSS' goto='/TailwindCSS' />
        <Card icon={<i class="ri-reactjs-fill"></i>} Topic='React js' goto='/Reactjs' />
        <Card icon={<i class="ri-github-fill"></i>} Topic='Git & Github' goto='/Github' />
        <Card2 icon={<i class="ri-git-repository-line"></i>} Topic='Project rep' goto='https://github.com/keshavgbpecdelhi/Web-Development/tree/master?tab=readme-ov-file#web-development' />
      </div>
    </>
  )
}

export default Topics