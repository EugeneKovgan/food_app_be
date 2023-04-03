import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1680534288512 implements MigrationInterface {
    name = 'Migration1680534288512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userName\` varchar(255) NOT NULL, \`name\` varchar(255) NULL, \`surname\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NULL, \`address\` varchar(255) NULL, \`avatar\` varchar(255) NULL, \`cardNumber\` text NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_f2578043e491921209f5dadd08\` (\`phoneNumber\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_f2578043e491921209f5dadd08\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
