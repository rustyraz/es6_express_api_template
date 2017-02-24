import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/index';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',routes)

app.listen(3000, () => {
  console.log('Api server running on port 3000');
});
