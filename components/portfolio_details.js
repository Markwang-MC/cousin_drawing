export default function Details({children}) {
  console.log(children);
  return (
    <div className='bg-black relative w-[100vw] min-h-[100vh]'>
      {
        children
      }
    </div>
  )
}
