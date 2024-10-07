import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteController } from 'src/controller/paciente.controller';
import { PacienteEntity } from 'src/entities/paciente.entity';
import { IPacienteRepositoryToken } from 'src/repository/interface/paciente.repository.interface';
import { PacienteRepository } from 'src/repository/paciente.repository';
import { IPacienteServiceToken } from 'src/service/interfaces/paciente.service.interface';
import { PacienteService } from 'src/service/paciente.service';
import { AgendamentoModule } from './agendamento.module';

@Module({
  imports: [
        TypeOrmModule.forFeature([PacienteEntity]),
        forwardRef(()=>AgendamentoModule)],
  controllers: [PacienteController],
  providers: [
    {
      provide: IPacienteServiceToken,
      useClass: PacienteService,
    },
    {
      provide: IPacienteRepositoryToken,
      useClass: PacienteRepository,
    },
    
  ],
  exports: [IPacienteRepositoryToken, IPacienteServiceToken],
})
export class PacienteModule {}
