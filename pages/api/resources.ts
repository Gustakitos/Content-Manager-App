import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function resources(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
  
    return res.send(data);
  }

  if (req.method === "POST") {
    try {
      const response = await axios.post("http://localhost:3001/api/resources", req.body);
      return res.send(response.data);  
    } catch (error) {
      console.log("error posting: ", error);
      return res.status(422).send("Error");
    }
  }

}