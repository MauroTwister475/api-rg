import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./Member";
import { Report } from "./Report";

@Entity('votoscontra')
export class VotosContra{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', default: 'Discorda'})
    status: string

    @ManyToMany(()  => Member, (member) => member.votoscontra, { eager: true})
    @JoinTable({
        name: 'votoscontra_members',
        joinColumn: {
            name: 'member_id',
            referencedColumnName: 'id'
        }, inverseJoinColumn: {
            name: 'votoscontra_id',
            referencedColumnName: 'id'
        }
        
    })
    members: Member[]

    @OneToOne(() => Report, (report) => report.votoscontra)
    report: Report
}
