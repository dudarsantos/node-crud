import { UpdateCategoryService } from './../services/UpdateCategoryService';
import { Request, Response } from "express";

export class UpdateCategoryController {
  async handlee(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description } = request.body;

    const service = new UpdateCategoryService();

    const result = await service.execute({id, name, description});

    if(result instanceof Error) {
      return response.status(404).json(result.message);
    }
    
    return response.json(result);
  }
}