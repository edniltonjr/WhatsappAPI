import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUserAddress1605107887714 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_addresses',
        columns: [
          {
            name: 'address_id',
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

    await queryRunner.createForeignKey('users_addresses', new TableForeignKey({
      name: 'UserAddressAddress',
      columnNames: ['address_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'addresses',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));

    await queryRunner.createForeignKey('users_addresses', new TableForeignKey({
      name: 'UserAddressUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users_addresses', 'UserAddressAddress');

    await queryRunner.dropForeignKey('users_addresses', 'UserAddressUser');

    await queryRunner.dropTable('users_addresses');
  }

}
