import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {ClassStudent} from "./kelas.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    email: string;

    @Column()
    password: string;

    @OneToMany(() => ClassStudent, (classStudent) => classStudent.students)
    class: ClassStudent[];
  }