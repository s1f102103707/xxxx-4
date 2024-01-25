import { userRepo } from '$/domain/repository/userRepo';
import { prismaClient } from '$/service/prismaClient';
import { defineController } from 'frourio';

export default defineController(() => ({
  get: async () => {
    const users = await userRepo.findAll(prismaClient);
    return { status: 200, body: users };
  },
}));
