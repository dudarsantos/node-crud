import { UpdatePlanet } from '../services/UpdatePlanet';
import { Request, Response } from "express";

export class UpdatePlanetController {
  async handlee(request: Request, response: Response) {
    const { id } = request.params;
    const { name, surfaceArea, sunDistance, day, gravity, description, color, image, card_image } = request.body;

    const service = new UpdatePlanet();

    const result = await service.execute({id, name, surfaceArea, sunDistance, day, gravity, description, color, image, card_image});

    if(result instanceof Error) {
      return response.status(404).json(result.message);
    }
    
    return response.json(result);
  }
}