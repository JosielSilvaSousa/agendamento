import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { hashSync } from "bcrypt";
  
  @Entity("user")
  export class UserEntity {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: "name" })
    name: string;
  
    @Column({ name: "email" })
    email: string; 

    @Column({ name: "password" })
    password: string

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
  
    @UpdateDateColumn({ name: "updated_at" })
    updateAt: Date;
  
    @DeleteDateColumn({ nullable: true, name: "deleted_at" })
    deletedAt: Date;
  
    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }
  }
  