const express = require('express')
const cors = require('cors')
const { MongoClient} = require('mongodb');
var ObjectId = require('mongodb').ObjectId
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

    app.get('/api/products/:id', async(req, res) =>{
      try{
        const id = req.params.id
      // console.log(id);
        const query = {_id:new ObjectId(id)}
        const result = await productsCollection.findOne(query)
        res.send(result)
      }
      catch(err){
        console.log(err);
      }
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