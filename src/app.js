import express from 'express';
import consign from 'consign';

const app = express();

consign({
        cwd: __dirname
    })
    .include('dbConfig.js')
    .then('db.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);


// no usar consign con export default de es6