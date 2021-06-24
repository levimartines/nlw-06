import { CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

abstract class AbstractEntity {
  @PrimaryColumn()
  readonly id: string;

  @CreateDateColumn()
  created_at: Date;


  protected constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { AbstractEntity };
