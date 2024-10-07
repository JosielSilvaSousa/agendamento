import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PacienteEntity } from './paciente.entity';

@Entity('agendamento')
export class AgendamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => PacienteEntity, (paciente) => paciente.id, {
    cascade: ['insert', 'update'], eager:true
  })
  @JoinColumn({ name: 'paciente_id', referencedColumnName: 'id' })
  paciente_id: PacienteEntity;

  @Column({ name: 'data' })
  data: Date;

  @Column({ name: 'sexo' })
  atendimento: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt: Date;
}
