import React from 'react'
import './Reactjs.css'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import ReactjsCard from './ReactjsCard/ReactjsCard'

function Reactjs() {
  return (
    <>
      <h1 className='text-center py-7 px-16 font-bold text-3xl contact'>This is the complete React course by <span className='text-orange-500'>Chai aur Code</span>. In this course you can learn everything about React. I have uploaded this course from Chai aur Code YouTube channel. Please visit the channel. And also you will get many good content related to coding.</h1>

      <h1 className=' mb-5 font-medium text-xl text-center'>Visit now <NavLink className='underline decoration-2 text-red-500 text-2xl' to='https://www.youtube.com/@chaiaurcode' target='_blank'>Chai aur Code</NavLink></h1>


      <div className="reactjs">
        <ReactjsCard lecture='1' url='https://youtu.be/vz1RlUyrc3w?si=RZ6BWM-G1nya1j96' />
        <ReactjsCard lecture='2' url='https://youtu.be/k3KqQvywToE?si=Foac_AQJkOyisc-E' />
        <ReactjsCard lecture='3' url='https://youtu.be/yNbnA5pryMg?si=KHwaptGdp-foU240' />
        <ReactjsCard lecture='4' url='https://youtu.be/kAOuj6o7Kxs?si=xND8T2xJNsp3urp0' />
        <ReactjsCard lecture='5' url='https://youtu.be/lI7IIOWM0Mo?si=9bcCgX_7pe3yWSZW' />
        <ReactjsCard lecture='6' url='https://youtu.be/MPCVGFvgVEQ?si=k-q5bMa-fBqBaUPR' />
        <ReactjsCard lecture='7' url='https://youtu.be/bB6707XzCNc?si=hDezoF6z4rPjY2rU' />
        <ReactjsCard lecture='8' url='https://youtu.be/tOYkV6Yhrhs?si=BPyjFW0ridgXrOTo' />
        <ReactjsCard lecture='9' url='https://youtu.be/_lJ3KNMue3w?si=W-pMR3CPZVDNfH-8' />
        <ReactjsCard lecture='10' url='https://youtu.be/Lt4vy8hfc-s?si=HN_bcG5xNXRDo7H5' />
        <ReactjsCard lecture='11' url='https://youtu.be/AFDYnd-XPa8?si=bZw6goTTQtmKQ89m' />
        <ReactjsCard lecture='12' url='https://youtu.be/VJov5QWEKE4?si=jdq4eJPO_-iKS3TI' />
        <ReactjsCard lecture='13' url='https://youtu.be/JQVBGtZMqgU?si=QdWB_JwHrKKrBUMU' />
        <ReactjsCard lecture='14' url='https://youtu.be/6KQeopPE36I?si=9CJ3AGuSeJQt8hOk' />
        <ReactjsCard lecture='15' url='https://youtu.be/1i04-A7kfFI?si=2ooeen3kHNgZ4adl' />
        <ReactjsCard lecture='Q&A' url='https://youtu.be/CqNSTD9ENb0?si=b2Hc7zbb3Z6ZELWR' />
        <ReactjsCard lecture='16' url='https://youtu.be/P-WHzz2M5aU?si=cRvIdZANXKrKQZca' />
        <ReactjsCard lecture='17' url='https://youtu.be/zLWif1pFYJg?si=ZxLye82KTV3Mza4N' />
        <ReactjsCard lecture='18' url='https://youtu.be/4_JlIr8yry0?si=hHJ50FNUAt_bLGSL' />
        <ReactjsCard lecture='19' url='https://youtu.be/0Py5cGGW2lE?si=X8GEg_hAvVmhTAFB' />
        <ReactjsCard lecture='20' url='https://youtu.be/lzx52HnWh4Y?si=PHxanwdoSPGCi01m' />
        <ReactjsCard lecture='21' url='https://youtu.be/8QGKg_W5sDQ?si=xUFbxjFNzWxsdMUs' />
        <ReactjsCard lecture='22' url='https://youtu.be/BSaYsHVpaK0?si=BPeYL84TW_CkkAnD' />
        <ReactjsCard lecture='23' url='https://youtu.be/lfMyCuB6xfc?si=E0DkzVpfKyE8yjvj' />
        <ReactjsCard lecture='24' url='https://youtu.be/-6LvNku2nJE?si=LVsjE7Pmry5YI3jz' />
        <ReactjsCard lecture='25' url='https://youtu.be/rC644qOZUro?si=uEb7NP6WFXeP-Vu1' />
        <ReactjsCard lecture='26' url='https://youtu.be/Od4rQCU41s4?si=Iu-oJJQvdoiKf8OJ' />
        <ReactjsCard lecture='27' url='https://youtu.be/dg2Gw1HSlpQ?si=EhvIVosmdT-46sDi' />
        <ReactjsCard lecture='28' url='https://youtu.be/KqGze7HCTIA?si=JEtmDqQozKtdJFze' />
        <ReactjsCard lecture='29' url='https://youtu.be/3o4qc9WRtWE?si=_kqekz6-23Xjgs6m' />
        <ReactjsCard lecture='30' url='https://youtu.be/fFHyqhmnVfs?si=SrgJuAkdIy3P2Na9' />
        <ReactjsCard lecture='31' url='https://youtu.be/P4X0vPTQX4A?si=t54hRllYU9OELk0d' />
        <ReactjsCard lecture='32' url='https://youtu.be/M3AxZX3g00w?si=SXTCAI0POPoqJMbe' />
        <ReactjsCard lecture='33' url='https://youtu.be/NxAwOjb_NlA?si=txnxOFM19N73fGDV' />
      </div>
    </>
  )
}

export default Reactjs