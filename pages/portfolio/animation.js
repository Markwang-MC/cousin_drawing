import {useRef,useEffect,useState} from 'react'
import opacity from '../../components/opacity'

export default function Animation() {
  const ele = useRef(null)
  useEffect(()=>{
    opacity(ele.current)
  },[])
  const [play,setPlay] = useState(false)
  const img = useRef(null)
  const video = useRef(null)

  useEffect(()=>{
    function fn() {
      let imgtop = img.current.getBoundingClientRect().top
      let videotop = video.current.getBoundingClientRect().top

      if (imgtop<window.innerHeight-img.current.offsetHeight) {
        setPlay(true)
        video.current.play()
      }
      if (videotop>window.innerHeight-video.current.offsetHeight) {
        setPlay(false)
        video.current.pause()
        video.current.currentTime=0
      }
    }
    window.addEventListener('scroll',fn)
    return ()=>window.removeEventListener('scroll',fn)
  },[])
  return (
    <div ref={ele} className='bg-black text-white pt-20 px-10 lg:px-40 min-h-[100vh] space-y-20'>
      <div className='opacity-0 flex flex-col place-items-center place-content-center space-y-5'>
        <div className='relative flex place-items-center place-content-center'>
          <img src='/images/animations/video.jpg'/>
          <a href='https://www.bilibili.com/video/BV1xd4y1m7wv/?spm_id_from=333.337.search-card.all.click&vd_source=92aac9211379029c00fa385a3b7edced' className='absolute md:text-2xl text-sm text_shadow underline p-2'>Play Video</a>
        </div>
        <div className='text-center text-xl md:text-4xl pb-5'>Go! Get it</div>

        <div className='md:text-xl text-sm italic'>
          Go! Get it is a short film that me and my crew created in three months, it aposs a story about how the protagonist had met her physical disability puppy, and how they grow up together.
        </div>

      </div>

      <div className='opacity-0 pb-10'>
        <img className={`${play?'hidden':'block'}`} src='/images/animations/cover.jpg'/>
        <video ref={video} className={`${play?'block':'hidden'}`}  src='/black_hole.mp4' loop></video>
        <div ref={img} className='text-center text-xl md:text-4xl pb-5'>Under the black hole</div>

        <div className='md:text-xl text-sm italic'>
          Under the black hole is an graduation film about how a black hole suddenly appeared upon the city, however, experts believed that in order to remove the black hole, they need to eliminate all the circles first.
          <br/>
          The protagonist is one of the workers dispatched by his superior, but he hide his music CD as his entertainment.
          <br/>
          One day, the black hole start to grow bigger...
        </div>
      </div>
    </div>
  )
}
