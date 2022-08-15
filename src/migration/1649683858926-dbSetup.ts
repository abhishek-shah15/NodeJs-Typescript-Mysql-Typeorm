import {MigrationInterface, QueryRunner} from "typeorm";

export class dbSetup1649683858926 implements MigrationInterface {
    name = 'dbSetup1649683858926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test\`.\`user\` DROP FOREIGN KEY \`FK_217ba147c5de6c107f2fa7fa271\``);
        await queryRunner.query(`ALTER TABLE \`test\`.\`user\` CHANGE \`addressId\` \`addressId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`test\`.\`user\` ADD CONSTRAINT \`FK_217ba147c5de6c107f2fa7fa271\` FOREIGN KEY (\`addressId\`) REFERENCES \`test\`.\`address\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test\`.\`user\` DROP FOREIGN KEY \`FK_217ba147c5de6c107f2fa7fa271\``);
        await queryRunner.query(`ALTER TABLE \`test\`.\`user\` CHANGE \`addressId\` \`addressId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`test\`.\`user\` ADD CONSTRAINT \`FK_217ba147c5de6c107f2fa7fa271\` FOREIGN KEY (\`addressId\`) REFERENCES \`test\`.\`address\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
