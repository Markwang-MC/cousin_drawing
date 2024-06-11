import '../styles/globals.css'
import Footer from '../components/footer'
import Header from '../components/header'

export default function App({Component,props}) {
  return (
    <div className='bg-black text-white'>
      <Header />
      <Component {...props}/>
      <Footer />
    </div>
  );
}
