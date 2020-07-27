const express = require("express");
const app = express();
app.use(express.json({ extended: false, limit: '50mb' }));

const connectMongoDB = require('./config');
connectMongoDB();

app.use("/api/post", require("./route/post"));
app.use("/api/feed", require("./route/feed"));

app.use(express.static('client/build'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
});