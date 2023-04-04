import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Link from 'next/link'

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
        products?.map(product=>(
          <Link href={`products/${product._id}`} key={product._id}>
            <Card  product={product}/>
          </Link>
        ))
      }
      </div>
    </div>
  )
}

export default Products