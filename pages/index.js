import {useEffect,useState} from 'react'
export default function Index() {
  return (
    <div style={{'backgroundImage':'url("/images/front.png")'}} className='fixed w-[100vw] h-[100vh] bg-center bg-cover'>
      <div className='text-white relative z-10'>
        <div className='text-center md:text-left pt-[50%] md:absolute md:pt-[10%] md:ml-20 space-y-2'>
          <div className='text_shadow text-2xl md:text-4xl'>I am Yuwei Zhang</div>
          <br/>
          <div className='text_shadow text-sm md:text-2xl'>This is my drawing journey</div>
        </div>
      </div>
    </div>
  );
}
