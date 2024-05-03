import cors from "cors";
import express from "express";
import { Router, Request, Response } from 'express';
import { readFileSync, writeFile } from "fs";
import path from "path";

const pathToFile = path.resolve('./data.json');

const app = express();

const PORT = 3001;

const route = Router()
app.use(cors());
app.use(express.json())

const getResources = () => JSON.parse(readFileSync(pathToFile, 'utf-8'))

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

route.get('/api/resources', (req, res) => {
  const data = getResources();

  res.send(data);
})

route.post('/api/resources', (req, res) => {
  const resources = getResources();
  const newResource = req.body;

  newResource.createdAt = new Date();
  newResource.status = "inactive";
  newResource.id = Date.now().toString();
  resources.unshift(newResource);

  writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
    if (error) {
      return res.status(422).send("Cannot store data in the file!");
    }

    return res.send("Data has been saved!");
  })
})

app.use(route)

app.listen(PORT, () => {
  console.log("Server running");
});