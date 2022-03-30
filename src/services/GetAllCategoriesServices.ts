import { getRepository } from 'typeorm';
import { Category } from '../entities/Categorys';


export class GetAllCategoriesServices {
async execute() {
  const repo = getRepository(Category);

  const categories = await repo.find();

  return categories;
}
}