import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDomain1605097718955 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'domains',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'domain',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('domains');
  }

}
