import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateActionControllerProfile1605102756741 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'actions_controllers_profiles',
        columns: [
          {
            name: 'profile_id',
            type: 'int',
          },
          {
            name: 'action_controller_id',
            type: 'int',
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

    await queryRunner.createForeignKey('actions_controllers_profiles', new TableForeignKey({
      name: 'ActionControllerProfileProfile',
      columnNames: ['profile_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'profiles',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));

    await queryRunner.createForeignKey('actions_controllers_profiles', new TableForeignKey({
      name: 'ActionControllerProfileActionController',
      columnNames: ['action_controller_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'actions_controllers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('actions_controllers_profiles', 'ActionControllerProfileProfile');

    await queryRunner.dropForeignKey('actions_controllers_profiles', 'ActionControllerProfileActionController');

    await queryRunner.dropTable('actions_controllers_profiles');
  }

}
