import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePaciente1728319869471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            queryRunner.createTable(
                new Table({
                name: "paciente",
                    columns: [
                    {
                        name: "id",
                        type: "INTEGER",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length:"100",
                        isNullable: false,
                    },     
                    {
                        name: "data_nascimento",
                        type: "datetime",
                        isNullable: true,
                    },                               
                    {
                        name: "sexo",
                        type: "varchar",
                        length: "15",
                        isNullable: true,
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        length: "15",
                        isNullable: true,
                    },                 
                    {
                        name: "altura",
                        type: "REAL",
                        isNullable: true,
                    },  
                    {
                        name: "peso",
                        type: "REAL",
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
            })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paciente");
    }

}
