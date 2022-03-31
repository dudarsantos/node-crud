import { Request, Response } from "express";
import { GetAllPlanets } from "../services/GetAllPlanets";

export class GetAllPlanetsController {
  async handle(request: Request, response: Response) {
    const  service = new GetAllPlanets();

    const planets = await service.execute();
    
    return response.json(planets);
  }
}