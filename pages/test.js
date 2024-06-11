import Image from 'next/image';
import {useEffect,useRef} from 'react'
export default function Test() {
  let arr = [

  ]
  return (
    <div>
      {arr.map((item)=>(
        <Image
          src={item}
          alt="Image description"
          width={100}
          height={500}
        />
      ))}
    </div>
  )
}
