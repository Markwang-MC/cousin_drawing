export default function Video({src,position,title}) {
  return (
    <div className={`w-[80%] text-white text-center`}>
      <img src={src}/>
      <div>{title}</div>
    </div>
  );
}
