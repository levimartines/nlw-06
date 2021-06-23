import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

abstract class AbstractEntity {
  @PrimaryColumn()
  readonly id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  protected constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { AbstractEntity };
