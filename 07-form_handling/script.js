//WE HAVE NOT COMPLETED FROMS HANDLING AND SESSIONS  
//WILL DO LATER.......


const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

//json middleware
app.use(express.json());

// url-encoded middleware
app.use(express.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => {
    res.send("Home Page")
});

// server listening at port 3000
app.listen(port, () => {
    console.log(`Server is running at ${3000}`);
    
})