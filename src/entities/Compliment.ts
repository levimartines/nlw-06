import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity({
  name: "compliments"
})
class Compliment extends AbstractEntity {
  @Column()
  user_sender: string;

  @JoinColumn({ name: "user_sender" })
  @ManyToOne(() => User)
  userSender: User;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: "user_receiver" })
  @ManyToOne(() => User)
  userReceiver: User;

  @Column()
  tag_id: string;

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => User)
  Tag: Tag;

  @Column()
  message: string;

  constructor() {
    super();
  }

}

export { Compliment };
