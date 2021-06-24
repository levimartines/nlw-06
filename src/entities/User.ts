import { Column, Entity, UpdateDateColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity({
  name: "users"
})
class User extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    super();
  }

}

export { User };
