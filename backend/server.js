console.log("hello world")

const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Cotent-type':'text/plain'});
    res.end("Hello World");
});

server.listen(3000,()=>{
    console.log("hello my dear");
});

