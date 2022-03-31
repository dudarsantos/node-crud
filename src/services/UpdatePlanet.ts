import { Planets } from '../entities/Planets';
import { getRepository } from "typeorm";

type PlanetUpdateRequest ={
  id: string,
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

export class UpdatePlanet {
  async execute({id, name, surfaceArea, sunDistance, day, gravity, description, color, image, card_image}: PlanetUpdateRequest) {
    const repo = getRepository(Planets);

    const planet = await repo.findOne(id);

    if(!planet) {
      return new Error("Category does not exists!");
    }

    planet.name = name ? name : planet.name;
    planet.surfaceArea = surfaceArea ? surfaceArea : planet.surfaceArea;
    planet.sunDistance = sunDistance ? sunDistance : planet.sunDistance;
    planet.day = day ? day : planet.day;
    planet.gravity = gravity ? gravity : planet.gravity;
    planet.description = description ? description : planet.description;
    planet.color = color ? color : planet.color;
    planet.image = image ? image : planet.image;
    planet.card_image = card_image ? card_image : planet.card_image;

    await repo.save(planet);

    return planet;
  }
}