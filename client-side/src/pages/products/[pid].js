import axios from 'axios'
import Image from 'next/image'
import { FiPlus,FiMinus } from 'react-icons/fi'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { CART_CONTEXT } from '../_app'

const Product = () => {
  const router = useRouter()
  const {pid} = router.query

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  const {cart,setCart} = useContext(CART_CONTEXT)

  useEffect(()=>{
    if(pid!==undefined){
      axios.get(`http://localhost:5000/api/products/${pid}`)
      .then(data=>setProduct(data.data))
      .catch(err=>console.log(err))
    }
  },[pid])

  const addToCart = (product) => {
    const tempProduct = {quantity:quantity, ...product}
    setCart([tempProduct, ...cart])
  }
  return (
    <div >
      <div className='flex flex-col items-center m-6 p-2 mx-auto bg-purple-100 rounded-xl max-w-5xl md:p-4 md:flex-row lg:w-10/12'>
        
        <div className='w-10/12 md:w-1/2'>
          <img src={product.img} className=''/>
        </div>

        <div className='bg-green-50 w-full md:w-1/2 p-4 rounded-xl space-y-3 md:space-y-6'>
          <h1 className='text-2xl md:text-4xl font-bold'>{product.name}</h1>
          <p className='text-gray-600'>{product.description}</p>
          <h3 className='text-3xl font-bold'>${product.price}</h3>

          <div className='inline-flex items-center outline outline-1 p-1'>
            {/* <label htmlFor="quantity">Quantity: </label> */}
            <button className='bg-gray-300 p-2 m-0.5' onClick={()=>setQuantity(quantity-1)}><FiMinus/></button>
            <input min={1} id='quantity' type="number" onChange={(e)=>setQuantity(parseInt(e.target.value))} className='block p-1 w-24' placeholder='quantity' value={quantity}/>
            <button className='bg-gray-300 p-2 m-0.5' onClick={()=>setQuantity(quantity+1)}><FiPlus/></button>
          </div>
          <button className='bg-black text-white font-bold px-4 py-3 outline-2 outline outline-black hover:bg-green-50 hover:text-black block'  onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
     
      </div>
    </div>
  )
}

export default Product