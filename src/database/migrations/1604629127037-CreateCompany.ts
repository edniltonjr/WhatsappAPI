import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompany1604629127037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'companys',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'company_name',
              type: 'varchar',
            },
            {
              name: 'cpf_cnpj',
              type: 'varchar',
            },
            {
              name: 'fantasy_name',
              type: 'varchar',
            },
            {
              name: 'logo_marca',
              type: 'varchar',
            },
            {
              name: 'ecode',
              type: 'varchar',
            },
            {
              name: 'active',
              type: 'boolean',
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
      await queryRunner.dropTable('companys');
    }

}
