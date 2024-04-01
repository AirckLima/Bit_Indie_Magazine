/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(99) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembersOnMagazine" (
    "magazineID" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "MembersOnMagazine_pkey" PRIMARY KEY ("memberId","magazineID")
);

-- AddForeignKey
ALTER TABLE "MembersOnMagazine" ADD CONSTRAINT "MembersOnMagazine_magazineID_fkey" FOREIGN KEY ("magazineID") REFERENCES "Magazine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembersOnMagazine" ADD CONSTRAINT "MembersOnMagazine_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
