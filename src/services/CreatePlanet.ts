import { getRepository } from "typeorm";
import { Planets } from "../entities/Planets";

type PlanetsRequest ={
  name: string;
  surfaceArea: number;
  sunDistance: number;
  day: string;
  gravity: string;
  description: string;
  color: string;
  image: string;
  card_image: string;
}

export class CreatePlanet {

  async execute({name, surfaceArea, sunDistance, day, gravity, description, color, image, card_image}: PlanetsRequest ): Promise<Planets | Error> {
    const repo =getRepository(Planets);

    // SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
    if(await repo.findOne({name})) {
      return new Error("Planet already exists");
    }

    const planets = repo.create({
      name, 
      surfaceArea, 
      sunDistance, 
      day, 
      gravity, 
      description, 
      color, 
      image, 
      card_image
    });

    await repo.save(planets);

    return planets;
  }
}