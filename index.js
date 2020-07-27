const express = require("express");
const app = express();
app.use(express.json({ extended: false, limit: '50mb' }));

const connectMongoDB = require('./config');
connectMongoDB();

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.use("/api/post", require("./route/post"));
app.use("/api/feed", require("./route/feed"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
});