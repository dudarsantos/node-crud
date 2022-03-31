import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategorias1648129343553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'planetas',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "surfaceArea",
                        type: "varchar",
                    },
                    {
                        name: "sunDistance",
                        type: "varchar",
                    },
                    {
                        name: "day",
                        type: "varchar",
                    },
                    {
                        name: "gravity",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar", 
                    },
                    {
                        name: "color",
                        type: "varchar",
                    },
                    {
                        name: "image",
                        type: "varchar",
                    },
                    {
                        name: "card_image",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categorias");
    }

}
