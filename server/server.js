const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const cors = require('cors');
app.use(cors());
app.use(express.json());


MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('scienceHub'); 
        const articlesCollection = db.collection('articles'); 
        const articlesRouter = createRouter(articlesCollection); 
        app.use('/api/articles', articlesRouter); 
    })
    .catch(console.error);



app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});