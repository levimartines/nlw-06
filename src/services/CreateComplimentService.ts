import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";
import { CustomError } from "../errors/CustomError";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {

    const complimentRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (user_sender == user_receiver) {
      throw new CustomError("Incorrect receiver", 400);
    }

    const receiver = await userRepository.findOne(user_receiver);
    if (!receiver) {
      throw new CustomError("User receiver does not exists", 400);
    }

    const compliment = complimentRepository.create({ tag_id, user_sender, user_receiver, message });
    await complimentRepository.save(compliment);
    return compliment;

  }
}

export { CreateComplimentService };
