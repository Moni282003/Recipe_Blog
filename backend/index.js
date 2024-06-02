const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

async function main() {
    try {
        await mongoose.connect('mongodb+srv://monish282003:Bwuud2vDjXOlrngw@recipe-blog.wwmck42.mongodb.net/Recipe-Blog?retryWrites=true&w=majority&appName=Recipe-Blog');
        console.log("DB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

main();

const itemRoutes = require('./src/route/ItemRoute');
const categoryRoutes = require('./src/route/CategoryRoute');
app.use('/api', itemRoutes);
app.use('/api', categoryRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
