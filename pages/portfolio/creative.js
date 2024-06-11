import {useEffect,useRef} from 'react'
import opacity from '../../components/opacity'

export default function Creatives() {
  const ele = useRef(null)
  useEffect(()=>{
    opacity(ele.current)
  },[])
  return (
    <div ref={ele} className='space-y-20 md:px-20 lg:px-40 px-5 py-20'>
      <img className='opacity-0' src='/images/creatives/one.jpg'/>
      <img className='opacity-0' src='/images/creatives/two.jpg'/>
      <img className='opacity-0' src='/images/creatives/three.jpg'/>
      <img className='opacity-0' src='/images/creatives/four.jpg'/>
      <img className='opacity-0' src='/images/creatives/five.jpg'/>
    </div>
  )
}
