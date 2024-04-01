-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EDITOR', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "Magazine" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(140) NOT NULL,
    "releaseNumber" SMALLINT NOT NULL,
    "releaseDate" DATE NOT NULL,

    CONSTRAINT "Magazine_pkey" PRIMARY KEY ("id")
);
