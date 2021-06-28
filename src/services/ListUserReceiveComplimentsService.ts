import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserReceiveComplimentsService {

  async execute(user_id: string) {
    const userRepository = getCustomRepository(ComplimentRepository);
    return await userRepository.find({
      where: { user_receiver: user_id },
      relations: ["userSender", "tag"]
    });
  }
}

export { ListUserReceiveComplimentsService };
