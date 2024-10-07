import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AgendamentoEntity } from './agendamento.entity';

@Entity('paciente')
export class PacienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'data_nacimento' })
  data_nascimento: Date;

  @Column({ name: 'sexo' })
  sexo: string;

  @Column({ name: 'telefone' })
  telefone: string;

  @ManyToMany(() => AgendamentoEntity, (agendamento) => agendamento.id, {
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinColumn({ name: 'agendamento_id', referencedColumnName: 'id' })
  agendamento_id: AgendamentoEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}
