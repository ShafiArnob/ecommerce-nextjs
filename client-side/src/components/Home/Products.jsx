import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/products')
    .then(data=>setProducts(data.data))
  },[])
  return (
    <div className='container mx-auto px-4 max-w-7xl'>
      <h1 className='text-4xl text-center'>Our Products</h1>
      <div>
      {
        products?.map(product=>(<p key={product._id}>{product.name}</p>))
      }
      </div>
    </div>
  )
}

export default Products