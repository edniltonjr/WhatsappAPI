import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompanyAddress1605107857852 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companys_addresses',
        columns: [
          {
            name: 'address_id',
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

    await queryRunner.createForeignKey('companys_addresses', new TableForeignKey({
      name: 'CompanyAddressAddress',
      columnNames: ['address_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'addresses',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));

    await queryRunner.createForeignKey('companys_addresses', new TableForeignKey({
      name: 'CompanyAddressCompany',
      columnNames: ['company_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'companys',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('companys_addresses', 'CompanyAddressAddress');

    await queryRunner.dropForeignKey('companys_addresses', 'CompanyAddressCompany');

    await queryRunner.dropTable('companys_addresses');
  }

}
