import express from 'express';
import connectToMongoDb from './services/mongoDb.service';
import accountRouter from './routes/account.routes';
import taskRouter from './routes/task.routes';
import bodyParser from 'body-parser';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3002;

const app = express();
app.use(bodyParser.json());
connectToMongoDb().catch(console.error);
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.use(accountRouter);
app.use(taskRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
