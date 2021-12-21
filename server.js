const express = require('express');
const app = express();

//server configuration
app.set('port',process.env.PORT||3000);
app.set('name','Prueba-api');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use(require('./routes/main.routes.js'));

//server initialization
app.listen(app.get('port'),(req,res)=>
{
    console.log('name: ',app.get('name'));
    console.log('port',app.get('port'));
});