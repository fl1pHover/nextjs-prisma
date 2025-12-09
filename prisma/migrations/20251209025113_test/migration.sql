/*
  Warnings:

  - You are about to drop the column `contente` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "contente",
ADD COLUMN     "content" TEXT;
