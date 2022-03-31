import { Planets } from '../entities/Planets';
import { getRepository } from "typeorm";

export class DeletePlanet {
  async execute(id: string) {
    const repo = getRepository(Planets);

    if(!await repo.findOne(id)){
      return new Error("Planet does not exist!")
    }

    await repo.delete(id);
  }
}