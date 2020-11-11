import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUserProfile1604782012137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users_profiles',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'profile_id',
              type: 'int',
            },
            {
              name: 'user_id',
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

      await queryRunner.createForeignKey('users_profiles', new TableForeignKey({
        name: 'UserProfileProfile',
        columnNames: ['profile_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'profiles',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }));

      await queryRunner.createForeignKey('users_profiles', new TableForeignKey({
        name: 'UserProfileUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users_profiles', 'UserProfileProfile');

      await queryRunner.dropForeignKey('users_profiles', 'UserProfileUser');

      await queryRunner.dropTable('users_profiles');
    }

}
