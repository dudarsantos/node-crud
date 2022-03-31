import { DeletePlanet } from '../services/DeletePlanet';
import { Request, Response } from "express";

export class DeletePlanetController {
  async handle(request: Request, response: Response){
    const { id } = request.params

    const service = new DeletePlanet();

    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}