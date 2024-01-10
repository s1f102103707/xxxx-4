import { defineController } from 'frourio';
import { userRepo } from '$/domain/repository/userRepo';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  get: async ({ params }) => {
    const user = await userRepo.findById(prismaClient, params.userId);
    return { status: 200, body: user };
  }
}));
