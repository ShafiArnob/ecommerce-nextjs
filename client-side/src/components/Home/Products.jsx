import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/products')
    .then(data=>setProducts(data.data))
  },[])
  return (
    <div className='container mx-auto px-4 max-w-6xl'>
      <h1 className='text-4xl text-center mb-4'>Our Products</h1>
      <div className='flex flex-wrap align-middle justify-center lg:justify-start  content-center'>
      {
        products?.map(product=>(<Card key={product._id} product={product}/>))
      }
      </div>
    </div>
  )
}

export default Products