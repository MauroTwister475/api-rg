import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1711983633871 implements MigrationInterface {
    name = 'Default1711983633871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" ADD "author" text`);
        await queryRunner.query(`ALTER TABLE "report" ADD "tendencies" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "tendencies"`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "author"`);
    }

}
