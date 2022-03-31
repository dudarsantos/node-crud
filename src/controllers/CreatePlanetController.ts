import { CreatePlanet } from '../services/CreatePlanet';
import { Request, Response } from "express";

export class CreatePlanetController {
  async handle(request: Request, response: Response) {
    const {name, surfaceArea, sunDistance, day, gravity, description, color, image, card_image } = request.body

    const service = new CreatePlanet();

    const result = await service.execute({name, surfaceArea, sunDistance, day, gravity, description, color, image, card_image});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}