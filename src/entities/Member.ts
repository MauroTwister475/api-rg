import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VotosContra } from "./VotosContra";
import { VotosFavor } from "./VotosFavor";
import { VotosEmAbstencao } from "./VotosEmAbstencao";

@Entity('member')
export class Member{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', unique: true})
    name: string

    @ManyToMany(() => VotosContra, (votoscontra) => votoscontra.members)
    votoscontra: VotosContra[]

    @ManyToMany(() => VotosContra, (votosfavor) => votosfavor.members)
    VotosFavor: VotosFavor[]

    @ManyToMany(() => VotosContra, (votosemabstencao) => votosemabstencao.members)
    VotosEmAbstencao: VotosEmAbstencao[]


}
