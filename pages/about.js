export default function About() {
  return (
    <div className='min-h-[100vh] bg-black text-white pt-10'>
      <div className='text-center font-bold text-2xl md:text-4xl pb-10'>About me</div>
      <div className='grid grid-rows-2 md:grid-rows-0 md:grid-cols-2 place-content-center py-20'>
        <div className='text-left pl-10 md:text-3xl'>
          <div>I am Yuwei Zhang</div>
        </div>
        <div style={{'backgroundImage':'url("/images/avatar2.jpg")'}} className='bg-cover md:w-[70%] md:pt-[70%] w-[80%] pt-[80%]'></div>
      </div>
    </div>
  )
}
