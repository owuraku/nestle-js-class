const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// const { handleGet, handlePost, handleMyName } = require('./handler');
const { sexMiddleware, ageMiddleware } = require('./middlewares');

const userRoutes = require('./routes/user.routes')

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);


// app.get('/applyforwar',sexMiddleware, handleApplyForWar, );
// app.get('/viewgoodies', ageMiddleware ,handleViewGoodies);
        




// app.get('/', handleGet);
// app.post('/', handlePost);
// app.get('/myname/:name/:age', handleMyName);


// app.patch('/',(req,res)=>res.send('Patch method'));
// app.put('/',(req,res)=>res.send('Put method'));
// app.delete('/',(req,res)=>res.send('Delete method'));
// https://de.wikipedia.org/wiki/Hello
//https://www.youtube.com/watch?v=mUxvEnPm9Jc




app.listen(9000, ()=> {
    console.log(`App successfully running on port 9000`);
});






























// const http = require('http');
// const urlParser = require('url');

// http.createServer((req, res) => {
// //    const url = req.url;
// //    const method = req.method;
//    const urlParsed = urlParser.parse(req.url, true);
// //    const { pathname, query } = urlParsed;
//    const query = urlParsed.query;
//    const pathname =  urlParsed.pathname;

//    res.writeHead(200, { 'Content-Type': 'text/html' });

//     // if url is /
//     if(pathname == '/'){
//         res.write('<h1 style="color:red">My first Node JS app</h1>');
//     }

//     //if url is /home
//     if(pathname == '/home') {
//         console.log(query);
//         const { name, age, married } = query;

//         if(age > 20){
//            res.write(`Welcome ${name}, you are an adult`);
//         } else {
//             res.write(`Welcome ${name}, to my homepage`);
//         }

//     }
    
//     res.end();

// }).listen(9000);

// // console.log(`Node JS class`);

// // running JS script outside the browser 
// // no browser API like window, geolocation, document
// // process, __dir , modules

// // console.log(process);
// // console.log(module);
// // console.log(require);
// // console.log(__dirname);
// // console.log(__filename);