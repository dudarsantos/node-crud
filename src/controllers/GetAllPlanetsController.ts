import { Request, Response } from "express";
import { GetAllPlanets } from "../services/GetAllPlanets";
import { PaginationQuery } from "../common/types";

interface PlanetRequest extends Request {
  query: PaginationQuery
}

export class GetAllPlanetsController {
  async handle(request: PlanetRequest, response: Response) {
    const { page, size } = request.query;
    const skip = (parseInt(page) <= 0 ? 1 : parseInt(page) - 1) * parseInt(size);
    const take = parseInt(size);

    const  service = new GetAllPlanets();

    const planets = await service.execute(skip, take);
    
    return response.json(planets);
  }
}