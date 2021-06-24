import { Column, Entity } from "typeorm";
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

  constructor() {
    super();
  }

}

export { User };
