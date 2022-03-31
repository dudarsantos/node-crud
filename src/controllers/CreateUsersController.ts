import { CreateUsers } from '../services/CreateUsers';
import { Request, Response } from "express";

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const {username, email, password} = request.body

    const service = new CreateUsers();

    const result = await service.execute({username, email, password});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}