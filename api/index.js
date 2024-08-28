import express from 'express';
import cors from 'cors';

import postRoute from './routes/posts.js';
import authRoute from './routes/auth.js';

import { db } from './db.js';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//endpoinst
app.use('/api/posts',postRoute);
app.use('/api/auth',authRoute);

db.connect((err)=>{
    if(err) return console.log(err);
    console.log('Database connected!')
})

app.listen(8000,()=>{
    console.log('App is listeng to port ',8000);
})