import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./Member";
import { Report } from "./Report";

@Entity('votosemabstencao')
export class VotosEmAbstencao{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', default: 'Em abstenção'})
    status: string

    @ManyToMany(()  => Member, (member) => member.votoscontra, { eager: true})
    @JoinTable({
        name: 'votosEmAbstencao_members',
        joinColumn: {
            name: 'member_id',
            referencedColumnName: 'id'
        }, inverseJoinColumn: {
            name: 'votosEmAbstencao_id',
            referencedColumnName: 'id'
        }
        
    })
    members: Member[]

    @OneToOne( () => Report, (report) => report.votosemabstencao)
    report: Report

}