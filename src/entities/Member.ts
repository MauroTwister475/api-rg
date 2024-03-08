import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Voting } from "./Voting";
import { VotosContra } from "./VotosContra";
import { VotosFavor } from "./VotosFavor";
import { VotosEmAbstencao } from "./VotosEmAbstencao";

@Entity('member')
export class Member{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'text', unique: true})
    name: string
    
    @OneToOne(() => Voting, voting => voting.member)
    member: Voting

    @ManyToMany(() => VotosContra, (votoscontra) => votoscontra.members)
    votoscontra: VotosContra[]

    @ManyToMany(() => VotosContra, (votosfavor) => votosfavor.members)
    VotosFavor: VotosFavor[]

    @ManyToMany(() => VotosContra, (votosemabstencao) => votosemabstencao.members)
    VotosEmAbstencao: VotosEmAbstencao[]


}
