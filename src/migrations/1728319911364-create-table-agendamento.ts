import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAgendamento1728319911364 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
            name: "agendamento",
                columns: [
                {
                    name: "id",
                    type: "INTEGER",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "data",
                    type: "datetime",
                    isNullable: false,
                },     
                {
                    name: "pacienteId",
                    type: "INTEGER",
                    isNullable: false,
                },                               
                {
                    name: "atendimento",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "created_at",
                    type: "datetime",
                    default: `CURRENT_TIMESTAMP`,
                },
                {
                    name: "updated_at",
                    type: "datetime",
                    default: `CURRENT_TIMESTAMP`,
                    onUpdate: "CURRENT_TIMESTAMP",
                },
                {
                    name: "deleted_at",
                    type: "datetime", 
                    isNullable: true,
                    default: null, 
                },
            ],    
            foreignKeys: [
                {
                  columnNames: ["pacienteId"],
                  referencedTableName: "paciente",
                  referencedColumnNames: ["id"],
                }
              ],      
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agendamento");
    }

}
