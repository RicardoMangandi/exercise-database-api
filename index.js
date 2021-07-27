const express = require("express")

const app = express()

const importData = require("./data.json")

let port = process.env.PORT || 3000

app.get("/", (req,res) => {

        res.send("Hello World")


})

app.get("/exercises", (req,res) => {

    res.send(importData)

})


app.listen(process.env.PORT || 3000,function() {

        console.log('Example app is listening on port http://localhost:%s', port)
})