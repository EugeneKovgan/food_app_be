import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1680553502019 implements MigrationInterface {
    name = 'Migration1680553502019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`avatar\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`avatarPath\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_50e36da9d45349941038eaf149\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userName\` varchar(255) NOT NULL, \`name\` varchar(255) NULL, \`surname\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NULL, \`address\` varchar(255) NULL, \`cardNumber\` text NULL, \`password\` varchar(255) NOT NULL, \`avatarId\` varchar(36) NULL, UNIQUE INDEX \`IDX_f2578043e491921209f5dadd08\` (\`phoneNumber\`), UNIQUE INDEX \`REL_58f5c71eaab331645112cf8cfa\` (\`avatarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_58f5c71eaab331645112cf8cfa5\` FOREIGN KEY (\`avatarId\`) REFERENCES \`avatar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_58f5c71eaab331645112cf8cfa5\``);
        await queryRunner.query(`DROP INDEX \`REL_58f5c71eaab331645112cf8cfa\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_f2578043e491921209f5dadd08\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_50e36da9d45349941038eaf149\` ON \`avatar\``);
        await queryRunner.query(`DROP TABLE \`avatar\``);
    }

}
