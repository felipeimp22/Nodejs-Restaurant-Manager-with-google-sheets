import server from './server';
console.log("Hello world")
server.listen(process.env.API_PORT, ()=> console.log(`Api is running on ${process.env.API_PORT}`));