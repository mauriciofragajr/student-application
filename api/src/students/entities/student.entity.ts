import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryColumn()
    cpf: string;

    @Column()
    name: string;

    @Column()
    email: string;
}