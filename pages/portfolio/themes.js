import {useRef,useEffect} from 'react'
import opacity from '../../components/opacity'

export default function Themes() {
  const ele = useRef(null)
  useEffect(()=>{
    opacity(ele.current)
  },[])
  return (
    <div ref={ele} className='min-h-[100vh] gap-10 p-10 pt-20 grid grid-cols-2 place-items-center'>
      <img src='/images/themes/one.jpg' className='opacity-0'/>
      <img src='/images/themes/two.jpg' className='opacity-0'/>
      <img src='/images/themes/three.jpg' className='opacity-0'/>
      <img src='/images/themes/four.jpg' className='opacity-0'/>

    </div>
  )
}
