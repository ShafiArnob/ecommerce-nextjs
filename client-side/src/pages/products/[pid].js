import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const router = useRouter()
  const {pid} = router.query

  const [product, setProduct] = useState({})

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products/${pid}`)
    .then(data=>console.log(data.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      {pid}
    </div>
  )
}

export default Product