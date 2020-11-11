import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUserLogin1605056221238 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_logins',
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
            name: 'token',
            type: 'varchar',
          },
          {
            name: 'refresh_token',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'login_date',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'logout_date',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'expire_date',
            type: 'timestamp',
            isNullable: true,
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

    await queryRunner.createForeignKey('users_logins', new TableForeignKey({
      name: 'UserLoginAclUser',
      columnNames: ['acl_user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'acls_users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users_logins', 'UserLoginAclUser');

    await queryRunner.dropTable('users_logins');
  }

}
