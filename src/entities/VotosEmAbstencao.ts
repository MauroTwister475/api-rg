import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./Member";
import { Report } from "./Report";

@Entity('votosfavor')
export class VotosFavor{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', default: 'Concorda'})
    status: string

    @ManyToMany(()  => Member, (member) => member.votoscontra, { eager: true})
    @JoinTable({
        name: 'votosFavor_members',
        joinColumn: {
            name: 'member_id',
            referencedColumnName: 'id'
        }, inverseJoinColumn: {
            name: 'votosFavor_id',
            referencedColumnName: 'id'
        }
        
    })
    members: Member[]

    @OneToOne(() => Report, (report) => report.votosfavor)
    report: Report
}
