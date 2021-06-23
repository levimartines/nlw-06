import { Column, Entity } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity({
  name: "tags"
})
class Tag extends AbstractEntity {
  @Column()
  name: string;

  constructor() {
    super();
  }
}

export { Tag };
