import { getRepository } from 'typeorm';
import { Planets } from '../entities/Planets';


export class GetAllPlanets {
async execute() {
  const repo = getRepository(Planets);

  const planets = await repo.find();

  return planets;
}
}