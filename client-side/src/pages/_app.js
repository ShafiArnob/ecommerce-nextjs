import Navbar from '@/components/shared/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-gray-100 h-full'>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}
