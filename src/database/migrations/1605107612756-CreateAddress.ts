import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAddress1605107612756 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'addresses',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'public_place',
              type: 'varchar',
            },
            {
              name: 'number',
              type: 'varchar',
            },
            {
              name: 'neighborhood',
              type: 'varchar',
            },
            {
              name: 'complement',
              type: 'varchar',
            },
            {
              name: 'city',
              type: 'varchar',
            },
            {
              name: 'state',
              type: 'varchar',
            },
            {
              name: 'zip_code',
              type: 'varchar',
            },
            {
              name: 'item_domain_id',
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

      await queryRunner.createForeignKey('addresses', new TableForeignKey({
        name: 'AddressItemDomain',
        columnNames: ['item_domain_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'items_domains',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('addresses', 'AddressItemDomain');

    await queryRunner.dropTable('addresses');
  }

}
