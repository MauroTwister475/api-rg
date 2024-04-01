import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1711980049534 implements MigrationInterface {
    name = 'Default1711980049534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" ADD "author" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "report" ADD "tendencies" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "tendencies"`);
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "author"`);
    }

}
