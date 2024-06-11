import {useState} from 'react'
import Link from 'next/link'
export default function Portfolio({curPage,setCurPage,color}) {

  return (
    <div className='min-h-[100vh] bg-black text-white flex place-content-center place-items-center'>
      <div className='mt-20 space-y-10'>
        <div className='text-center md:text-5xl text-4xl font-bold'>Recent Works</div>

        <div className='gap-y-20 w-[100vw] gap-y-10 text-center grid grid-cols-0 md:grid-cols-3 py-5 place-items-center'>
          <Link href='portfolio/themes' className='w-full h-full'>
            <div className='portfolio w-full'>
              <div style={{'backgroundImage':'url("/images/front.png")'}} className='bg'></div>
              <div className='item'>Themes</div>
            </div>
          </Link>

          <Link href='portfolio/animation' className='w-full h-full'>
            <div className='portfolio w-full'>
              <div style={{'backgroundImage':'url("/images/animation.png")'}} className='bg'></div>
              <div className='item'>Animations</div>
            </div>
          </Link>

          <Link href='portfolio/creative' className='w-full h-full'>
            <div className='portfolio w-full'>
              <div style={{'backgroundImage':'url("/images/color_paint.jpg")'}} className='bg'></div>
              <div className='item'>Creatives</div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
