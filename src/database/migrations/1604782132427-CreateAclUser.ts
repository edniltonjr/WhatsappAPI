import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAclUser1604782132427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'acls_users',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'user_profile_id',
              type: 'int',
            },
            {
              name: 'company_id',
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

      await queryRunner.createForeignKey('acls_users', new TableForeignKey({
        name: 'AclUserUserProfile',
        columnNames: ['user_profile_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users_profiles',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }));

      await queryRunner.createForeignKey('acls_users', new TableForeignKey({
        name: 'AclUserCompany',
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'companys',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('acls_users', 'AclUserUserProfile');

      await queryRunner.dropForeignKey('acls_users', 'AclUserCompany');

      await queryRunner.dropTable('acls_users');
    }
}
