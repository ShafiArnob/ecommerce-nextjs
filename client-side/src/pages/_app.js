import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/shared/Navbar'
import '@/styles/globals.css'
import { createContext, useState } from 'react';

export const CART_CONTEXT = createContext()

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const value = {cart, setCart}
  // console.log(cart);
  return (
    <div className='bg-gray-50 h-full'>
      <CART_CONTEXT.Provider value={value}>
      <Sidebar>
        <Navbar/>
        <Component {...pageProps} />
      </Sidebar>
      </CART_CONTEXT.Provider>
    </div>
  )
}
