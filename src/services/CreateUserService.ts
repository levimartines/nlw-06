import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { getCustomRepository } from "typeorm";
import { CustomError } from "../errors/CustomError";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  password: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {

  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email cannot be null or blank");
    }

    const userAlreadyExist = await userRepository.findOne({ email });
    if (userAlreadyExist) {
      throw new CustomError("User already exists", 409);
    }
    if (!password) {
      throw new CustomError("Password cannot be null or blank", 400);
    }
    const passwordEncoded = await hash(password, 8);

    const user: User = userRepository.create({ name, email, admin, password: passwordEncoded });
    await userRepository.save(user);
    return user;
  }
}

export { CreateUserService };
