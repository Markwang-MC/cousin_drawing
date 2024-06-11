import Link from 'next/link'
import {useState} from 'react'
export default function Header() {
  const [curPage,setCurPage] = useState('home')
  const [open,setOpen] = useState(false)

  return (
    <div className="">
      <nav className="z-10 fixed inset-x-0 top-0 hidden md:flex place-items-center place-content-between px-5 pt-5">
        <div>LOGO</div>
        <div className='space-x-24 flex'>
        {
          ["Home", "Portfolio", "About"].map((item,i)=><div key={i}><Link href={`/${item=='Home'?'':item.toLowerCase()}`}><div onClick={()=>setCurPage(item)} className={`${curPage==item?'text-yellow-400':''}`}>{item}</div></Link></div>)
        }
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-[22px] w-[22px] bi bi-envelope-at" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
          </svg>
        </div>
      </nav>

      <nav className="z-10 fixed inset-x-0 top-0 flex md:hidden place-items-center place-content-between px-5 pt-5">
        <div>LOGO</div>
        <div className=''>
          {
            open?(<svg onClick={()=>setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[30px] h-[30px] bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>):(
              <svg onClick={()=>setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[30px] h-[30px] bi bi-list-nested" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
              </svg>
            )
          }
        </div>

      </nav>

      {
        open?(
          <div className='z-[5] flex flex-col place-items-center place-content-center fixed inset-0 bg-black space-y-10'>
          {
            ["Home", "Portfolio", "About"].map((item,i)=><div key={i}><Link href={`/${item=='Home'?'':item.toLowerCase()}`}><div onClick={()=>{
              setCurPage(item)
              setOpen(false)
            }} className={`text-2xl ${curPage==item?'text-yellow-400':''}`}>{item}</div></Link></div>)
          }
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-[25px] w-[25px] bi bi-envelope-at" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
            </svg>
          </div>
        ):''
      }
    </div>
  )
}
