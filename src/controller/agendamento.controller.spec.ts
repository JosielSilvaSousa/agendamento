import { ReturnAgendamentoDto } from "../model/return-agendamento.dto";
import { AgendamentoController } from "./agendamento.controller";

it('should create a new agendamento when valid data is provided', async () => {
    const mockService = {
      createAgenda: jest.fn().mockResolvedValue([
        {
          id: 1,
          data: new Date('2024-10-10 00:00:00'),
          atendimento: 'teste',
          pacienteId: 1,
          paciente: {
                  nome:"Joao",
                  data_nascimento:"2024-10-10 00:00:00",
                  sexo:"Masculino",
                  telefone:"1199999-9999"
                }

        },
      ]),
    };
    const controller = new AgendamentoController(mockService as any);

    const createAgendamentoDto = [
      {
        data: new Date('2024-10-10 00:00:00'),
        atendimento: 'teste',
        pacienteId: 1,
        paciente: {
                nome:"Joao",
                data_nascimento:"2024-10-10 00:00:00",
                sexo:"Masculino",
                telefone:"1199999-9999"
              }
      }
    ];
    const result = await controller.Create(createAgendamentoDto);
    expect(result).toEqual([
      {
        id: 1,
        data: new Date("2024-10-10 00:00:00"),
        atendimento: 'teste',
        pacienteId: 1,
        paciente: {
                nome:"Joao",
                data_nascimento:"2024-10-10 00:00:00",
                sexo:"Masculino",
                telefone:"1199999-9999"
              }
      },
    ]);
    expect(mockService.createAgenda).toHaveBeenCalledWith(createAgendamentoDto);
  });

  it('should throw an error when creating agendamento with invalid date format', async () => {
    const mockService = {
      createAgenda: jest.fn(),
    };
    const controller = new AgendamentoController(mockService as any);
    const createAgendamentoDto = [
      {
        data: new Date("2024-10-10 00:00:00"),
        atendimento: 'teste',
        pacienteId: 1,
        paciente: {
                nome:"Joao",
                data_nascimento:"2024-10-10 00:00:00",
                sexo:"Masculino",
                telefone:"1199999-9999"
              }
      },
    ];
    await expect(controller.Create(createAgendamentoDto)).rejects.toThrow();
  });

  it('should return a list of agendamentos when iService.findAll is successful', async () => {
    const mockAgendamentos = [
      { id: 1, paciente: { name: 'Lucas' }, data: '2023-10-01', atendimento: 'Consulta', pacienteId: 1 },
      { id: 2, paciente: { name: 'Maria' }, data: '2023-10-02', atendimento: 'Exame', pacienteId: 2 }
    ];
    const mockService = {
      findAll: jest.fn().mockResolvedValue(mockAgendamentos)
    };
    const controller = new AgendamentoController(mockService as any);

    const result = await controller.findAll();

    expect(result).toHaveLength(2);
    expect(result[0]).toBeInstanceOf(ReturnAgendamentoDto);
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
  });

