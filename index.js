const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')

require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())






const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.8dothja.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const usersCollection = client.db('newspapers').collection('users')
        const journlsCollection = client.db('newspapers').collection('journals')
        const articlesCollection = client.db('newspapers').collection('articles')
        const userarticlesCollection = client.db('newspapers').collection('userarticles')
        const editorsCollection = client.db('newspapers').collection('editors')
        const adveseresCollection = client.db('newspapers').collection('adveseres')
        const membersCollection = client.db('newspapers').collection('members')
        const archivesCollection = client.db('newspapers').collection('archives')


        //users collection.............

        app.get('/users', async (req, res) => {
            const result = await usersCollection.find().toArray()
            res.send(result)
        })

        //post single user
        app.post('/users', async (req, res) => {
            const product = req.body
            const result = await usersCollection.insertOne(product)
            res.send(result)
        })

         //single user details
         app.get('/users/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.findOne(query)
            res.send(result)
        })

        //delete single user
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.deleteOne(query)
            res.send(result)
        })



        //journals collection.............

        //for all journal

        app.get('/journals', async (req, res) => {
            const result = await journlsCollection.find().toArray()
            res.send(result)
        })

        //post single journal
        app.post('/journals', async (req, res) => {
            const product = req.body
            const result = await journlsCollection.insertOne(product)
            res.send(result)
        })

        //single journal details
        app.get('/journals/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await journlsCollection.findOne(query)
            res.send(result)
        })

        //delete single journal
        app.delete('/journals/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await journlsCollection.deleteOne(query)
            res.send(result)
        })


        //update journals
        app.patch('/journals/:id', async (req, res) => {
            const id = req.params.id
            const updatedData = req.body
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    ...updatedData
                }
            }
            const result = await journlsCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })


        //article collection .........

        //for all all article

        app.get('/articles', async (req, res) => {
            const result = await articlesCollection.find().toArray()
            res.send(result)
        })

        //post single article
        app.post('/articles', async (req, res) => {
            const product = req.body
            const result = await articlesCollection.insertOne(product)
            res.send(result)
        })

        //single article details
        app.get('/articles/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await articlesCollection.findOne(query)
            res.send(result)
        })

        //delete single article
        app.delete('/articles/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await articlesCollection.deleteOne(query)
            res.send(result)
        })


        //update article
        app.patch('/articles/:id', async (req, res) => {
            const id = req.params.id
            const updatedData = req.body
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    ...updatedData
                }
            }
            const result = await articlesCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })

        //editor board.....

        //for all all editor

        app.get('/editors', async (req, res) => {
            const result = await editorsCollection.find().toArray()
            res.send(result)
        })

        //post single editor
        app.post('/editors', async (req, res) => {
            const product = req.body
            const result = await editorsCollection.insertOne(product)
            res.send(result)
        })


        //delete single editor
        app.delete('/editors/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await editorsCollection.deleteOne(query)
            res.send(result)
        })


        //update editor
        app.patch('/editors/:id', async (req, res) => {
            const id = req.params.id
            const updatedData = req.body
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    ...updatedData
                }
            }
            const result = await editorsCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })


        //adviser board.....

        //for all all adviser

        app.get('/adveseres', async (req, res) => {
            const result = await adveseresCollection.find().toArray()
            res.send(result)
        })

        //post single adviser
        app.post('/adveseres', async (req, res) => {
            const product = req.body
            const result = await adveseresCollection.insertOne(product)
            res.send(result)
        })


        //delete single adviser
        app.delete('/adveseres/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await adveseresCollection.deleteOne(query)
            res.send(result)
        })


        //update adviser
        app.patch('/adveseres/:id', async (req, res) => {
            const id = req.params.id
            const updatedData = req.body
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    ...updatedData
                }
            }
            const result = await adveseresCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })



        // Members api.....

        //for all all Members

        app.get('/members', async (req, res) => {
            const result = await membersCollection.find().toArray()
            res.send(result)
        })

        //post single Members
        app.post('/members', async (req, res) => {
            const product = req.body
            const result = await membersCollection.insertOne(product)
            res.send(result)
        })


        //delete single Members
        app.delete('/members/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await membersCollection.deleteOne(query)
            res.send(result)
        })


        //update Members
        app.patch('/members/:id', async (req, res) => {
            const id = req.params.id
            const updatedData = req.body
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    ...updatedData
                }
            }
            const result = await membersCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })



        // archive api.....

        //for all all archive

        app.get('/archives', async (req, res) => {
            const result = await archivesCollection.find().toArray()
            res.send(result)
        })

        //post single archive
        app.post('/archives', async (req, res) => {
            const product = req.body
            const result = await archivesCollection.insertOne(product)
            res.send(result)
        })




        //user post ariticle........

        //for all all article

        app.get('/userarticles', async (req, res) => {
            const result = await userarticlesCollection.find().toArray()
            res.send(result)
        })

        //post single article
        app.post('/userarticles', async (req, res) => {
            const product = req.body
            const result = await userarticlesCollection.insertOne(product)
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send(' server side is running')
})

app.listen(port, () => {
    console.log(` server side is running on port, ${port}`)
})