/*
  Warnings:

  - You are about to drop the column `amountId` on the `Ingredients` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usedId` to the `Ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Ingredients` DROP FOREIGN KEY `Ingredients_amountId_fkey`;

-- AlterTable
ALTER TABLE `Ingredients` DROP COLUMN `amountId`,
    ADD COLUMN `amount` VARCHAR(191) NOT NULL,
    ADD COLUMN `unit` VARCHAR(191) NOT NULL,
    ADD COLUMN `usedId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Ingredients` ADD CONSTRAINT `Ingredients_usedId_fkey` FOREIGN KEY (`usedId`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
