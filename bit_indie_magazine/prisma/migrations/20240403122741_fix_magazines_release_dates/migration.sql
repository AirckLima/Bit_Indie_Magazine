/*
  Warnings:

  - A unique constraint covering the columns `[releaseNumber]` on the table `Magazine` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Magazine_releaseNumber_key" ON "Magazine"("releaseNumber");
