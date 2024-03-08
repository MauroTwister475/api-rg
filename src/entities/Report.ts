import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { VotosContra } from "./VotosContra";
import { VotosFavor } from "./VotosFavor";
import { VotosEmAbstencao } from "./VotosEmAbstencao";

@Entity('report')
export class Report{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'text', nullable: false})
    theme: string

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    point: string
    
    @Column({type: 'text', nullable: true})
    reference: string

    @Column({type: 'text', nullable: true})
    atribuition: string

    @Column({type: 'text'})
    cod_document: string

    @Column({type: 'text'})
    Angola_participation: string

    @Column({type: 'text'})
    decision: string

    @Column({type: 'text'})
    summary: string

    @Column({type: 'text'})
    meeting_number: string
    
    @Column({ type: 'text'})
    comment: string

    @CreateDateColumn({ name: 'create_at'})
    create_at: Date

    @OneToOne(() => VotosContra, (votoscontra) => votoscontra.report)
    @JoinColumn({
        name: 'votoscontra_id'
    })
    votoscontra: VotosContra
 
    @OneToOne(() => VotosFavor, (votosfavor) => votosfavor.report)
    @JoinColumn({
        name: 'votosfavor_id'
    })
    votosfavor: VotosFavor

    @OneToOne( () => VotosEmAbstencao, (votosemabstencao) => votosemabstencao.report)
    @JoinColumn({
        name: 'votosemabstencao_id'
    })
    votosemabstencao: VotosEmAbstencao
}