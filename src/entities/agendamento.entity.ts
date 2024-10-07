import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PacienteEntity } from './paciente.entity';

@Entity('agendamento')
export class AgendamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PacienteEntity, (paciente) => paciente.agendamento, {
    cascade: ['insert', 'update']
  })
  //@JoinColumn({ name: 'pacienteId', referencedColumnName: 'id' })
  paciente: PacienteEntity;

  @Column({ name: 'data' })
  data: Date;

  @Column({ name: 'pacienteId' })
  pacienteId:number;

  @Column({ name: 'atendimento' })
  atendimento: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}
