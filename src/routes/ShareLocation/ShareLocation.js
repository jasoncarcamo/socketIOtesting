const express = require("express");
const ShareLocation = express.Router();

ShareLocation
    .route("/trip/:id")
    .get((req, res)=>{
        console.log("HEllo")
        const io = req.app.get("io");
        io.on("connection", (socket)=>{
            socket.on("chat", (msg) => {
                console.log(msg);
            })
        })
    });

module.exports = ShareLocation;