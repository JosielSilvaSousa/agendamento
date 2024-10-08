import { AgendamentoController } from "../src/controller/agendamento.controller";

it('should create a new agendamento when valid data is provided', async () => {
    const mockService = {
      createAgenda: jest.fn().mockResolvedValue([
        {
          id: 1,
          data: new Date('2024-10-10T00:00:00'),
          atendimento: 'teste',
          pacienteId: 1,
        },
      ]),
    };
    const controller = new AgendamentoController(mockService as any);
    const createAgendamentoDto = [
      {
        data: new Date('2024-10-10 00:00:00'),
        atendimento: 'teste',
        pacienteId: 1,
      },
    ];
    const result = await controller.Create(createAgendamentoDto);
    expect(result).toEqual([
      {
        id: 1,
        data: new Date('2024-10-10T00:00:00'),
        atendimento: 'teste',
        pacienteId: 1,
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
        data: new Date('2024-20-10 00:00:00'),
        atendimento: 'teste',
        pacienteId: 1,
      },
    ];
    await expect(controller.Create(createAgendamentoDto)).rejects.toThrow();
    expect(mockService.createAgenda).not.toHaveBeenCalled();
  });