import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {Student} from "./siswa.entity";

@Entity()
export class ClassStudent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    className: string;

    @ManyToOne(() => Student, (student) => student.class)
    students: Student[];
  }