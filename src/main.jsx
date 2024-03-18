import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Topics from './Component/Topics/Topics.jsx'
// import Projacts from './Component/Projacts/Projacts.jsx'
import About from './Component/About/About.jsx'

import HTML from './Component/Topics/TopicsComp/HTML/HTML.jsx'
import CSS from './Component/Topics/TopicsComp/CSS/CSS.jsx'
import Javascript from './Component/Topics/TopicsComp/Javascript/Javascript.jsx'
import Bootstrap from './Component/Topics/TopicsComp/Bootstrap/Bootstrap.jsx'
import TailwindCSS from './Component/Topics/TopicsComp/TailwindCSS/TailwindCSS.jsx'
import Reactjs from './Component/Topics/TopicsComp/Reactjs/Reactjs.jsx'
import Github from './Component/Topics/TopicsComp/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/Topics' element={<Topics />} />
      {/* <Route path='/Projacts' element={<Projacts />} /> */}
      <Route path='/About' element={<About />} />
      <Route path='/HTML' element={<HTML />} />
      <Route path='/CSS' element={<CSS />} />
      <Route path='/Javascript' element={<Javascript />} />
      <Route path='/Bootstrap' element={<Bootstrap />} />
      <Route path='/TailwindCSS' element={<TailwindCSS />} />
      <Route path='/Reactjs' element={<Reactjs />} />
      <Route path='/Github' element={<Github />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
