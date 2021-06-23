import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email cannot be null or blank");
    }

    const userAlreadyExist = await userRepository.findOne({ email });
    if (userAlreadyExist) {
      throw new Error("User already exists");
    }

    const user: User = userRepository.create({ name, email, admin });
    await userRepository.save(user);
    return user;
  }
}

export { CreateUserService };
