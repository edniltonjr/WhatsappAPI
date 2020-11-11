import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompanyContact1605107872204 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companys_contacts',
        columns: [
          {
            name: 'contact_id',
            type: 'int',
          },
          {
            name: 'company_id',
            type: 'int',
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

    await queryRunner.createForeignKey('companys_contacts', new TableForeignKey({
      name: 'CompanyContactContact',
      columnNames: ['contact_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'contacts',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));

    await queryRunner.createForeignKey('companys_contacts', new TableForeignKey({
      name: 'CompanyContactCompany',
      columnNames: ['company_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'companys',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('companys_contacts', 'CompanyContactContact');

    await queryRunner.dropForeignKey('companys_contacts', 'CompanyContactCompany');

    await queryRunner.dropTable('companys_contacts');
  }

}
