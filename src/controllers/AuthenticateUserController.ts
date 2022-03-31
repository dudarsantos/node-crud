import { Request, Response } from "express";
import { AuthenticateUser } from "../services/AuthenticateUser";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { password, email } = request.body;

    const service = new AuthenticateUser();

    const token = await service.execute({password, email});

    return response.json(token);
  }
}