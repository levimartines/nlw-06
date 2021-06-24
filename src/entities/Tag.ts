import { Column, Entity, UpdateDateColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity({
  name: "tags"
})
class Tag extends AbstractEntity {
  @Column()
  name: string;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    super();
  }
}

export { Tag };
