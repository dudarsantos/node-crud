import { getRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";
import { compose } from "bcrypt";
import { sing } from "jsonwebtoken";

type AuthRequest = {
  email: string;
  password: string;
}

type Response = {
  user: {
    username: string;
    email: string;
  };
  token: string;
}

export class AuthenticateUser {
  private userRepository: Repository<Users>

  constructor() {
    this.userRepository = getRepository(Users);
  }

  async execute({ email, password}: AuthRequest): Promise<Users | Error |Response> {
    const userAlreadyExists = await this.userRepository.findOne({
      where: {
        email,
      }
    });

    if (!userAlreadyExists) {
      return new Error("Email or password incorrect")
    }

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if(!passwordMatch) {
      throw new Error("Email or password incorrect");
    }

    const token = sing({}, "", {
      subject: userAlreadyExists.id,
      expiresIn: "1d"
    });

    return {
      token,
      user: {
        username: userAlreadyExists.username,
        email: userAlreadyExists.email
      }
    };
  }
}