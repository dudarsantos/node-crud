import { getRepository } from "typeorm";
import { Users } from "../entities/Users";
import { hash } from "bcrypt";


type PlanetsRequest ={
  username: string;
  email: string;
  password: string;
}

export class CreateUsers {

  async execute({username, email, password}: PlanetsRequest ): Promise<Users | Error> {
    const repo =getRepository(Users);

    // SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
    if(await repo.findOne({username})) {
      return new Error("User already exists");
    }

    if(await repo.findOne({email})) {
      return new Error("E-mail already exists");
    }

    const passwordHash = await hash(password, 8);
    const user = repo.create({
        username,
        email,
        password: passwordHash
    });

    await repo.save(user);

    return user;
  }
}