import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateContact1605107774213 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'contacts',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'contact',
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

      await queryRunner.createForeignKey('contacts', new TableForeignKey({
        name: 'ContactItemDomain',
        columnNames: ['item_domain_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'items_domains',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('contacts', 'ContactItemDomain');

    await queryRunner.dropTable('contacts');
  }

}
