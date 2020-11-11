import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAclUserAction1605056178539 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'acls_users_actions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'acl_user_id',
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

    await queryRunner.createForeignKey('acls_users_actions', new TableForeignKey({
      name: 'AclUserActionAclUser',
      columnNames: ['acl_user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'acls_users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));

    await queryRunner.createForeignKey('acls_users_actions', new TableForeignKey({
      name: 'AclUserActionActionController',
      columnNames: ['action_controller_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'actions_controllers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('acls_users_actions', 'AclUserActionAclUser');

    await queryRunner.dropForeignKey('acls_users_actions', 'AclUserActionActionController');

    await queryRunner.dropTable('acls_users_actions');
  }

}
