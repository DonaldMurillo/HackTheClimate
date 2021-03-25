require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
require('./db/mongoose');
import { exampleRouter } from './routes/example';
import { eventRouter } from './routes/event';
import { financialRouter } from './routes/financial';
import { receiptRouter } from './routes/receipt';

import cors from 'cors';

/** Express server */
const app: express.Application = express();

//  Expres internal Bodyparser implementations for parsing request body
app.use(express.json());
app.use(cors());

//ROUTES
app.use(exampleRouter); // '/api/v1/example'
app.use(eventRouter);
app.use(financialRouter);
app.use(receiptRouter);


mongoose.connection.on('connected', ()=>{
    console.log('Connected!')
});

mongoose.connection.on('disconnected', ()=>{
    console.log('Disconnected!')
});

//LANDING PAGE
app.listen(3001, function () {
    console.log('App is listening on port 3001!');
});