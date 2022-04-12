import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import helloRouter from './routes/hello';
import helmet from 'helmet';
import bodyParser from 'body-parser';

config();
const port = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/hello', helloRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
