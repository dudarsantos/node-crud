import { getRepository } from 'typeorm';
import { Planets } from '../entities/Planets';

export class GetAllPlanets {
async execute(skip: number = 0, take: number = 0) {
  const repo = getRepository(Planets);

  repo.createQueryBuilder("planetas")

  const planets = await repo.findAndCount({
    skip,
    take,
  });

  return {planets: planets[0], total: planets[1]};
}
}