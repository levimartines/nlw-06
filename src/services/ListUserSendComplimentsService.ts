import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserSendComplimentsService {

  async execute(user_id: string) {
    const userRepository = getCustomRepository(ComplimentRepository);
    return await userRepository.find({
      where: { user_sender: user_id }
    });
  }

}

export { ListUserSendComplimentsService };
