import cors from "cors";
import express from "express";
import { Router, Request, Response } from 'express';
import { readFileSync } from "fs";
import path from "path";

const pathToFile = path.resolve('./data.json');

const app = express();

const PORT = 3001;

const route = Router()
app.use(cors());
app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

route.get('/api/resources', (req, res) => {
  const data = JSON.parse(readFileSync(pathToFile, 'utf-8'));

  res.send(data);
})

app.use(route)

app.listen(PORT, () => {
  console.log("Server running");
});