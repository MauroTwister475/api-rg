import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsStrongPassword, MaxLength, MinLength } from 'class-validator'

@Entity('user')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'text'})
    @MaxLength(50, { message: 'Nome deve possuir no máximo 50 caracteres'})
    @MinLength(8, { message: 'Nome deve possuir no minimo 8 caracteres'})
    name: string

    @Column({type: 'text', unique: true})
    @IsEmail()
    email: string

    @Column({type: 'text'})
    @MaxLength(17, { message: 'A senha deve possuir no máximo 17 caracteres'})
    @MinLength(8, { message: 'A senha deve possuir no minimo 8 caracteres'})
    @IsStrongPassword()
    password: string
}
