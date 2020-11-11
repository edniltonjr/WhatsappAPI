import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUserContact1605107899104 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_contacts',
        columns: [
          {
            name: 'contact_id',
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

    await queryRunner.createForeignKey('users_contacts', new TableForeignKey({
      name: 'UserContactContact',
      columnNames: ['contact_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'contacts',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));

    await queryRunner.createForeignKey('users_contacts', new TableForeignKey({
      name: 'UserContactUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users_contacts', 'UserContactContact');

    await queryRunner.dropForeignKey('users_contacts', 'UserContactUser');

    await queryRunner.dropTable('users_contacts');
  }

}
