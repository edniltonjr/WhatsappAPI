import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateItemDomain1605097732191 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'items_domains',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'item',
            type: 'varchar',
          },
          {
            name: 'domain_id',
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

    await queryRunner.createForeignKey('items_domains', new TableForeignKey({
      name: 'ItemDomainDomain',
      columnNames: ['domain_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'domains',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('items_domains', 'ItemDomainDomain');

    await queryRunner.dropTable('items_domains');
  }

}
