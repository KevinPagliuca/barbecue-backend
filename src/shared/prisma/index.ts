import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const userRepository = prismaClient.user;
const churrasRepository = prismaClient.churras;
const participantsRepository = prismaClient.participants;

export {
  prismaClient,
  userRepository,
  churrasRepository,
  participantsRepository,
};
