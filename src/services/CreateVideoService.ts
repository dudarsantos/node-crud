import { Category } from './../entities/Categorys';
import { getRepository } from "typeorm";
import { Video } from "../entities/Videos";

type VideoRequest ={
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

export class CreateVideoService {

  async execute({name, description, duration, category_id }:VideoRequest ): Promise<Video | Error> {
    const repo =getRepository(Video);
    const repoCategory = getRepository(Category);

    if(await repo.findOne(category_id)) {
      return new Error("Category already exists!");
    }

    const video = repo.create({
      name,
      description,
      duration,
      category_id
    });

    await repo.save(video);

    return video;
  }
}