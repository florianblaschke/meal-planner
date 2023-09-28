/*
  Warnings:

  - You are about to drop the column `content` on the `Ingredients` table. All the data in the column will be lost.
  - Added the required column `ingredient` to the `Ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ingredients` DROP COLUMN `content`,
    ADD COLUMN `ingredient` VARCHAR(191) NOT NULL;
