const express = require('express')
const cors = require('cors')
const { MongoClient} = require('mongodb');

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri,{
  useNewUrlParser:true
})

async function run(){
  try{
    const productsCollection = client.db('ecommerce').collection('products')

    app.get('/api/products', async(req, res)=>{
      const query = {}
      const cursor = productsCollection.find(query)
      const products = await cursor.toArray()
      res.send(products)
    })
  }
  finally{

  }
}
run().catch(console.dir)

app.get('/', (req, res) =>{
  res.send("Inv Server running")
})

app.listen(port, ()=>{
  console.log("Listening ", port);
})