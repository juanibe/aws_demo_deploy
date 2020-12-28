/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MigrationInterface, QueryRunner } from 'typeorm';
import { hash } from 'bcrypt';

export class Users1604503838331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hashPassword = await hash('test123', 12);
    await queryRunner.query(
      `insert into users ( "firstName", "lastName", email, password) values ('Karl', 'Marx', 'karl@email.com', '${hashPassword}' );`
    );
    await queryRunner.query(
      `insert into users ( "firstName", "lastName", email, password) values ('Sigmund', 'Freud', 'freud@email.com', '${hashPassword}');`
    );
    await queryRunner.query(
      `insert into users ( "firstName", "lastName", email, password) values ('Michel', 'Foucault', 'foucault@email.com', '${hashPassword}');`
    );
    await queryRunner.query(
      `insert into users ( "firstName", "lastName", email, password) values ('Tales', 'Mileto', 'tales@email.com', '${hashPassword}');`
    );
    await queryRunner.query(
      `insert into users ( "firstName", "lastName", email, password) values ('Immanuel', 'Kant', 'kant@email.com', '${hashPassword}');`
    );
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
