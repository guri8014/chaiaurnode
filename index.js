require('dotenv').config()

let express = require('express');
let app = express();
let port = 4000;
app.get('/',(req, res)=>{
    res.send('Hello world')
});

app.get('/twitter',(req,res)=>{
    res.send('Twitter')
});

app.get('/login',(req, res)=>{
    res.send('<h1>Login</login>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`app running on port ${process.env.PORT}`)
})