// import { NextFunction, Request, Response } from "express";
// import { verify } from "jsonwebtoken";
// import { getRepository } from "typeorm";
// import { Users } from "../entities/Users";

// interface IPayLoad {
//   sub: string;
// }

// export async function ensureAuthenticated( request: Request, response: Response, next: NextFunction) {
//   const  authHeader = request.headers.authorization;

//   if(!authHeader) {
//     throw new Error("Token missing");
//   }

//   const [, token] = authHeader.split("");

//   try {
//     const {sub: user_id} = verify(token, "45a0ff0c706c46bd96a38f828b2753d6") as IPayLoad;
//     const userRepository = getRepository(Users);
//     const user = userRepository.findOne(user_id);

//     if(!user) {
//       throw new Error("User does nor exist!");
//     }

//     next();
//   } catch {
//     throw new Error("Invalid token!");
//   }
// }