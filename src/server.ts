import express, { Request, Response } from 'express';
import path from 'path';
import petRoutes from './routes/petRouter';


const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', petRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use('/index', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
