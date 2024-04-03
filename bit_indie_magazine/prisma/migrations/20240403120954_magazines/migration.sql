/*
  Warnings:

  - You are about to drop the `MembersOnMagazine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MembersOnMagazine" DROP CONSTRAINT "MembersOnMagazine_magazineID_fkey";

-- DropForeignKey
ALTER TABLE "MembersOnMagazine" DROP CONSTRAINT "MembersOnMagazine_memberId_fkey";

-- DropTable
DROP TABLE "MembersOnMagazine";

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "magazineId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MemberToTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_magazineId_key" ON "Team"("magazineId");

-- CreateIndex
CREATE UNIQUE INDEX "_MemberToTeam_AB_unique" ON "_MemberToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_MemberToTeam_B_index" ON "_MemberToTeam"("B");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_magazineId_fkey" FOREIGN KEY ("magazineId") REFERENCES "Magazine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberToTeam" ADD CONSTRAINT "_MemberToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberToTeam" ADD CONSTRAINT "_MemberToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
