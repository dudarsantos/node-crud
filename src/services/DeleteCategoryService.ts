import { Category } from './../entities/Categorys';
import { getRepository } from "typeorm";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    if(!await repo.findOne(id)){
      return new Error("Category does not exist!")
    }

    await repo.delete(id);
  }
}