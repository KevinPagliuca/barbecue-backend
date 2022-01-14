-- DropForeignKey
ALTER TABLE "Participants" DROP CONSTRAINT "Participants_churras_id_fkey";

-- AddForeignKey
ALTER TABLE "Participants" ADD CONSTRAINT "Participants_churras_id_fkey" FOREIGN KEY ("churras_id") REFERENCES "Churras"("id") ON DELETE CASCADE ON UPDATE CASCADE;
