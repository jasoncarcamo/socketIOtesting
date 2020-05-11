const app = require("./app");
const {PORT, DATABASE_URL} = require("../../config");
const knex = require("knex");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const db = knex({
    client: 'pg',
    connection: DATABASE_URL
});

app.set("db", db);
app.set("io", io);

io.on("connection", (socket)=>{
    
    socket.on(socket.id, msg => {
        console.log(socket.request)
        console.log("from id", msg);
        socket.emit(socket.id, msg);
    });

    socket.on("example", msg => {
        console.log("from example", msg);
        socket.emit("example", msg);
    })
}); 

server.listen( PORT, ()=>{
    console.log(`App working. Listening on port: ${PORT}`);
});