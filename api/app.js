require('babel-core/register');
require('babel-polyfill');

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';

import { RouterContactUs } from './component/contactus';

export const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use("/contactus", RouterContactUs);
app.use(express.static(path.join(__dirname, "../dist")));
app.use(function response(req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});
app.listen(3000);
