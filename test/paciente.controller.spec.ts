import { CreatePacienteDto } from "../src/model/create.paciente.dto";
import { PacienteController } from "../src/controller/paciente.controller";
import { ReturnPacienteDto } from "../src/model/return.paciente.dto";
import { HttpException, HttpStatus } from "@nestjs/common";

it('should return a list of ReturnPacienteDto when creating a paciente with valid data', async () => {
    const mockPacienteService = {
      create: jest.fn().mockResolvedValue([new ReturnPacienteDto({ nome: 'Joao da Silva' })]),
    };
    const controller = new PacienteController(mockPacienteService as any);
    const createPacienteDto = [new CreatePacienteDto()];
    const result = await controller.Create(createPacienteDto);
    expect(result).toEqual([new ReturnPacienteDto({ nome: 'Joao da Silva' })]);
    expect(mockPacienteService.create).toHaveBeenCalledWith(createPacienteDto);
  });

  it('should throw a 400 Bad Request when creating a paciente with missing required fields', async () => {
    const mockPacienteService = {
      create: jest.fn().mockRejectedValue(new HttpException('Bad request', HttpStatus.BAD_REQUEST)),
    };
    const controller = new PacienteController(mockPacienteService as any);
    const createPacienteDto = []; 
    await expect(controller.Create(createPacienteDto)).rejects.toThrow(HttpException);
    expect(mockPacienteService.create).toHaveBeenCalledWith(createPacienteDto);
  });