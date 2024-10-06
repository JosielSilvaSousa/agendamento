import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export enum SexoEnum {
  Masculino = 'Masculino',
  Feminino = 'Feminino',
}

export class CreatePacienteDto {
  @ApiProperty({ description: 'informe seu name', example: 'Joao da silva' })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ description: 'informe seu email', example: '2021-01-01' })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  data_nascimento?: Date;

  @ApiProperty({
    description: 'informe sua sexo do paciente',
    example: 'Masculino',
    enum: SexoEnum,
  })
  @IsEnum(SexoEnum, { message: 'O sexo deve ser Masculino ou Feminino' })
  sexo?: string;

  @ApiProperty({
    description: 'informe seu telefone',
    example: '(11)9999-9999',
  })
  @IsPhoneNumber('BR', {
    message: 'O número de telefone deve estar no formato válido para o Brasil',
  })
  telefone?: string;
}
