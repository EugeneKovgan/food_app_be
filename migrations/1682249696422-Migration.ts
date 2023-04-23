import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1682249696422 implements MigrationInterface {
  name = 'Migration1682249696422';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`address\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`city\` varchar(255) NULL DEFAULT '', \`street\` varchar(255) NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`avatar\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`path\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_50e36da9d45349941038eaf149\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`order\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`orderId\` varchar(255) NOT NULL, \`userId\` varchar(255) NOT NULL, \`data\` varchar(255) NOT NULL, \`orderInformation\` text NULL, \`courierId\` varchar(255) NOT NULL, \`deliveryTime\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`address\` text NULL, UNIQUE INDEX \`IDX_b075313d4d7e1c12f1a6e6359e\` (\`orderId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` varchar(255) NOT NULL, \`userName\` varchar(255) NOT NULL, \`name\` varchar(255) NULL, \`surname\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NULL, \`address\` text NULL, \`cardNumber\` text NULL, \`favoritesProducts\` text NULL, \`password\` varchar(255) NOT NULL, \`avatarId\` varchar(36) NULL, UNIQUE INDEX \`IDX_d72ea127f30e21753c9e229891\` (\`userId\`), UNIQUE INDEX \`IDX_f2578043e491921209f5dadd08\` (\`phoneNumber\`), UNIQUE INDEX \`REL_58f5c71eaab331645112cf8cfa\` (\`avatarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`couriers\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`couriersId\` varchar(255) NULL, \`name\` varchar(255) NULL, \`surname\` varchar(255) NULL, \`email\` varchar(255) NULL, \`phoneNumber\` varchar(255) NULL, \`courierCity\` varchar(255) NULL, \`deliveryTime\` varchar(255) NULL, \`avatarId\` varchar(36) NULL, UNIQUE INDEX \`IDX_aac12abaa2cfb648417c5baa30\` (\`couriersId\`), UNIQUE INDEX \`IDX_a6769729b1e302628da484eb59\` (\`phoneNumber\`), UNIQUE INDEX \`REL_52be17e3ed171746c51cbb43ef\` (\`avatarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product-img\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`path\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_781244bae8efb92dfa0dd8851c\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`productName\` varchar(255) NULL, \`productPrice\` float NOT NULL DEFAULT '0', \`productRating\` float NOT NULL DEFAULT '0', \`productDescription\` varchar(400) NULL, \`productCategory\` varchar(255) NULL, \`productCookingTime\` int NULL, \`pictureId\` varchar(36) NULL, UNIQUE INDEX \`REL_70f1dbdc3ac63d475ae8918836\` (\`pictureId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_58f5c71eaab331645112cf8cfa5\` FOREIGN KEY (\`avatarId\`) REFERENCES \`avatar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`couriers\` ADD CONSTRAINT \`FK_52be17e3ed171746c51cbb43efb\` FOREIGN KEY (\`avatarId\`) REFERENCES \`avatar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD CONSTRAINT \`FK_70f1dbdc3ac63d475ae89188369\` FOREIGN KEY (\`pictureId\`) REFERENCES \`product-img\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_70f1dbdc3ac63d475ae89188369\``);
    await queryRunner.query(`ALTER TABLE \`couriers\` DROP FOREIGN KEY \`FK_52be17e3ed171746c51cbb43efb\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_58f5c71eaab331645112cf8cfa5\``);
    await queryRunner.query(`DROP INDEX \`REL_70f1dbdc3ac63d475ae8918836\` ON \`product\``);
    await queryRunner.query(`DROP TABLE \`product\``);
    await queryRunner.query(`DROP INDEX \`IDX_781244bae8efb92dfa0dd8851c\` ON \`product-img\``);
    await queryRunner.query(`DROP TABLE \`product-img\``);
    await queryRunner.query(`DROP INDEX \`REL_52be17e3ed171746c51cbb43ef\` ON \`couriers\``);
    await queryRunner.query(`DROP INDEX \`IDX_a6769729b1e302628da484eb59\` ON \`couriers\``);
    await queryRunner.query(`DROP INDEX \`IDX_aac12abaa2cfb648417c5baa30\` ON \`couriers\``);
    await queryRunner.query(`DROP TABLE \`couriers\``);
    await queryRunner.query(`DROP INDEX \`REL_58f5c71eaab331645112cf8cfa\` ON \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_f2578043e491921209f5dadd08\` ON \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_d72ea127f30e21753c9e229891\` ON \`user\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_b075313d4d7e1c12f1a6e6359e\` ON \`order\``);
    await queryRunner.query(`DROP TABLE \`order\``);
    await queryRunner.query(`DROP INDEX \`IDX_50e36da9d45349941038eaf149\` ON \`avatar\``);
    await queryRunner.query(`DROP TABLE \`avatar\``);
    await queryRunner.query(`DROP TABLE \`address\``);
  }
}
