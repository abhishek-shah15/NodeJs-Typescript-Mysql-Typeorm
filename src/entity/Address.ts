import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address_line1: string;

}
