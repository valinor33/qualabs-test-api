require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const PORT = process.env.APP_PORT;

/* MIDDLEWARES */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* PROGRAM */

let db = []

/* PRIMER TEST -  */

fs.readdir("./db", (err, files) => {
    if (err) console.log(err);
    else {
        files.forEach(file => {
            const selectedFile = `./db/${file}`

            fs.readFile(selectedFile, JSON, (err, data) => {
                if (err) console.log(err);
                console.log(JSON.stringify(data));
                db.push(JSON.stringify(data))
            })
        })
    }
})

console.log(db);


/* CONNECTION */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))