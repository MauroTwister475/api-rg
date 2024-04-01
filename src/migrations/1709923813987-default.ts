import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1709923813987 implements MigrationInterface {
    name = 'Default1709923813987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "member" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "UQ_8174d0498e41d6e7c108b657e79" UNIQUE ("name"), CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "votoscontra" ("id" SERIAL NOT NULL, "status" text NOT NULL DEFAULT 'Discorda', CONSTRAINT "PK_3731b64107266ec2b9eee524aac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "votosfavor" ("id" SERIAL NOT NULL, "status" text NOT NULL DEFAULT 'Concorda', CONSTRAINT "PK_c0e783a642b19fb6e1897be37c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "votosemabstencao" ("id" SERIAL NOT NULL, "status" text NOT NULL DEFAULT 'Em abstenção', CONSTRAINT "PK_283606a41fe2ff60871332c97e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report" ("id" SERIAL NOT NULL, "theme" text NOT NULL, "title" text NOT NULL, "point" text NOT NULL, "reference" text, "atribuition" text, "cod_document" text NOT NULL, "Angola_participation" text NOT NULL, "decision" text NOT NULL, "summary" text NOT NULL, "meeting_number" text NOT NULL, "comment" text NOT NULL, "create_at" text NOT NULL, "votoscontra_id" integer, "votosfavor_id" integer, "votosemabstencao_id" integer, CONSTRAINT "REL_ebefe69d7c2e034f22d554ecc8" UNIQUE ("votoscontra_id"), CONSTRAINT "REL_dee273fcad262ef1261a677947" UNIQUE ("votosfavor_id"), CONSTRAINT "REL_116c328c26cc2f198073df2025" UNIQUE ("votosemabstencao_id"), CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "votoscontra_members" ("member_id" integer NOT NULL, "votoscontra_id" integer NOT NULL, CONSTRAINT "PK_678223d78f033881a526e19a2c6" PRIMARY KEY ("member_id", "votoscontra_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_39fe873e7fd134b7b7538f0403" ON "votoscontra_members" ("member_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c94390b9c16bb67a0d4b90d083" ON "votoscontra_members" ("votoscontra_id") `);
        await queryRunner.query(`CREATE TABLE "votosFavor_members" ("member_id" integer NOT NULL, "votosFavor_id" integer NOT NULL, CONSTRAINT "PK_bdf5f75f77f29093671b0b5b0f3" PRIMARY KEY ("member_id", "votosFavor_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ebc91ab8e246c9ad9d99ec8f37" ON "votosFavor_members" ("member_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_fb83912109693b53fc3a6faa21" ON "votosFavor_members" ("votosFavor_id") `);
        await queryRunner.query(`CREATE TABLE "votosEmAbstencao_members" ("member_id" integer NOT NULL, "votosEmAbstencao_id" integer NOT NULL, CONSTRAINT "PK_c1e55d7f15b58bddca9b4ff6689" PRIMARY KEY ("member_id", "votosEmAbstencao_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d71f27ca9285ab14bc56f72e24" ON "votosEmAbstencao_members" ("member_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_22f9cadbc222e49226896caa9a" ON "votosEmAbstencao_members" ("votosEmAbstencao_id") `);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_ebefe69d7c2e034f22d554ecc8c" FOREIGN KEY ("votoscontra_id") REFERENCES "votoscontra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_dee273fcad262ef1261a677947c" FOREIGN KEY ("votosfavor_id") REFERENCES "votosfavor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_116c328c26cc2f198073df2025a" FOREIGN KEY ("votosemabstencao_id") REFERENCES "votosemabstencao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "votoscontra_members" ADD CONSTRAINT "FK_39fe873e7fd134b7b7538f04034" FOREIGN KEY ("member_id") REFERENCES "votoscontra"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "votoscontra_members" ADD CONSTRAINT "FK_c94390b9c16bb67a0d4b90d0839" FOREIGN KEY ("votoscontra_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "votosFavor_members" ADD CONSTRAINT "FK_ebc91ab8e246c9ad9d99ec8f379" FOREIGN KEY ("member_id") REFERENCES "votosfavor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "votosFavor_members" ADD CONSTRAINT "FK_fb83912109693b53fc3a6faa218" FOREIGN KEY ("votosFavor_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "votosEmAbstencao_members" ADD CONSTRAINT "FK_d71f27ca9285ab14bc56f72e245" FOREIGN KEY ("member_id") REFERENCES "votosemabstencao"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "votosEmAbstencao_members" ADD CONSTRAINT "FK_22f9cadbc222e49226896caa9ae" FOREIGN KEY ("votosEmAbstencao_id") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "votosEmAbstencao_members" DROP CONSTRAINT "FK_22f9cadbc222e49226896caa9ae"`);
        await queryRunner.query(`ALTER TABLE "votosEmAbstencao_members" DROP CONSTRAINT "FK_d71f27ca9285ab14bc56f72e245"`);
        await queryRunner.query(`ALTER TABLE "votosFavor_members" DROP CONSTRAINT "FK_fb83912109693b53fc3a6faa218"`);
        await queryRunner.query(`ALTER TABLE "votosFavor_members" DROP CONSTRAINT "FK_ebc91ab8e246c9ad9d99ec8f379"`);
        await queryRunner.query(`ALTER TABLE "votoscontra_members" DROP CONSTRAINT "FK_c94390b9c16bb67a0d4b90d0839"`);
        await queryRunner.query(`ALTER TABLE "votoscontra_members" DROP CONSTRAINT "FK_39fe873e7fd134b7b7538f04034"`);
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_116c328c26cc2f198073df2025a"`);
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_dee273fcad262ef1261a677947c"`);
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_ebefe69d7c2e034f22d554ecc8c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_22f9cadbc222e49226896caa9a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d71f27ca9285ab14bc56f72e24"`);
        await queryRunner.query(`DROP TABLE "votosEmAbstencao_members"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb83912109693b53fc3a6faa21"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ebc91ab8e246c9ad9d99ec8f37"`);
        await queryRunner.query(`DROP TABLE "votosFavor_members"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c94390b9c16bb67a0d4b90d083"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_39fe873e7fd134b7b7538f0403"`);
        await queryRunner.query(`DROP TABLE "votoscontra_members"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`DROP TABLE "votosemabstencao"`);
        await queryRunner.query(`DROP TABLE "votosfavor"`);
        await queryRunner.query(`DROP TABLE "votoscontra"`);
        await queryRunner.query(`DROP TABLE "member"`);
    }

}
