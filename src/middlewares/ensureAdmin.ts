import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

export async function ensureAdmin(request: Request, response: Response, nextFunction: NextFunction) {

  const userRepository = getCustomRepository(UserRepository);

  const { user_id } = request;
  const user = await userRepository.findOne(user_id);
  const { admin } = user;

  if (admin) {
    return nextFunction();
  }

  return response.status(401).json({
    error: "Unauthorized"
  });
}
