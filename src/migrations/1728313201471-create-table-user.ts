import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1728313201471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
            name: "user",
                columns: [
                {
                    name: "id",
                    type: "INTEGER",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                },     
                {
                    name: "email",
                    type: "varchar",
                    isNullable: false,
                },                               
                {
                    name: "password",
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
        })
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }
}

