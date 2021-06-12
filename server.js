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

let db = {
    'auth_module':
    {
        'authn.provider_1': [],
        'authn.provider_2': [],
        'authn.provider_3': [],
        'authn.provider_4': []
    },
    'content_module':
    {
        'authz.provider_1': [],
        'authz.provider_2': [],
        'authz.provider_3': [],
        'authz.provider_4': []
    }
}

fs.readdir("./db", (err, files) => {
    if (err) console.log(err);
    else {
        files.forEach(file => {
            const selectedFile = `./db/${file}`

            let rawdata = fs.readFileSync(selectedFile);
            let user = JSON.parse(rawdata)

            const content_module = user.provider.content_module;
            const auth_module = user.provider.auth_module;

            /* AUTH MODULE */
            if (auth_module === "authz.provider_1") {

                db.auth_module[auth_module].push(`./${file}`)

            } else if (auth_module === "authz.provider_2") {

                db.auth_module[auth_module].push(`./${file}`)

            } else if (auth_module === "authz.provider_3") {

                db.auth_module[auth_module].push(`./${file}`)

            } else {

                db.auth_module[auth_module].push(`./${file}`)
            }

            /* CONTENT MODULE */
            if (content_module === "authz.provider_1") {

                db.content_module[content_module].push(`./${file}`)

            } else if (content_module === "authz.provider_2") {

                db.content_module[content_module].push(`./${file}`)

            } else if (content_module === "authz.provider_3") {

                db.content_module[content_module].push(`./${file}`)
                content_module
            } else {

                db.content_module[content_module].push(`./${file}`)
            }

        })
    }
})

/* FILTERS */



/* ROUTES */

app.get("/api/users", (req, res) => {

    res.status(200).json(db)
})



/* CONNECTION */
app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${PORT}`))



//PRIMER TEST
// let db = []

// fs.readdir("./db", (err, files) => {
//     if (err) console.log(err);
//     else {
//         files.forEach(file => {
//             const selectedFile = `./db/${file}`

//             let rawdata = fs.readFileSync(selectedFile);
//             let user = JSON.parse(rawdata)   
//             db.push(user)
//         })
//     }
// })

//en la llamada se agrega el sort para ordenar
// db.sort(function (a, b) {
//     return a - b;
// });


/* TEST 2 */
// const readFile = () => fs.readdir("./db", (err, files) => {
//     if (err) console.log(err);
//     else {
//         files.forEach(file => {
//             const selectedFile = `./db/${file}`

//             let rawdata = fs.readFileSync(selectedFile);
//             let user = JSON.parse(rawdata)

//             const content_module = user.provider.content_module;
//             const auth_module = user.provider.auth_module;



//             console.log(typeof (content_module));
//             console.log(auth_module);


//         })
//     }
//     return db
// })