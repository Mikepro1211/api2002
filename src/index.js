'use strict'
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


//settings
const port = process.env.PORT || 3000;
app.set('json spaces', 2);

//coneccion a mongo db  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://mikepro:mikepro1211@rest.jtbltkf.mongodb.net/?retryWrites=true&w=majority').then(db=>console.log('conexion a base de datos exitosa')).catch(err =>console.log('error: ', err));

//midleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


//especificaciond e rutas
app.use(require('./routes/index'));

//abrimos el servidor
app.listen(port,()=>{
    console.log('Server listening on port 3000')
})
