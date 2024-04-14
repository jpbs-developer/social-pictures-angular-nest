import { MigrationInterface, QueryRunner } from 'typeorm';

export class TablesV11713021790281 implements MigrationInterface {
  name = 'TablesV11713021790281';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`photos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`url\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`photos\` ADD CONSTRAINT \`FK_74da4f305b050f7d27c73b04263\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`photos\` DROP FOREIGN KEY \`FK_74da4f305b050f7d27c73b04263\``,
    );
    await queryRunner.query(`DROP TABLE \`photos\``);
  }
}
