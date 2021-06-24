import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { CustomError } from "../errors/CustomError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });
    if (!user) {
      throw new CustomError("Email/Password incorrect", 403);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new CustomError("Email/Password incorrect", 403);
    }

    return sign({ email: user.email }, "GOKUSS5",
      { subject: user.id, expiresIn: "1d" });
  }

}

export { AuthenticateUserService };
