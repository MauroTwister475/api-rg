import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Report } from "./Report";
import { Member } from "./Member";

@Entity('voting')
export class Voting{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => Member, member => member.member)
    @JoinColumn({name: 'member_id'})
    member: Member
}
