import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";
import { Tag } from "../entities/Tag";
import { CustomError } from "../errors/CustomError";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error("Tag name cannot be null or blank");
    }

    const tagAlreadyExists = await tagRepository.findOne({ name });
    if (tagAlreadyExists) {
      throw new CustomError("Tag already exists", 409);
    }

    const tag: Tag = tagRepository.create({ name });
    await tagRepository.save(tag);
    return tag;
  }
}

export { CreateTagService };
