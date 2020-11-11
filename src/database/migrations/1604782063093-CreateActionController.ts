import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateActionController1604782063093 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'actions_controllers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'controller_id',
            type: 'int',
          },
          {
            name: 'action',
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

    await queryRunner.createForeignKey('actions_controllers', new TableForeignKey({
      name: 'ActionControllerController',
      columnNames: ['controller_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'controllers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('actions_controllers', 'ActionControllerController');

    await queryRunner.dropTable('actions_controllers');
  }

}
