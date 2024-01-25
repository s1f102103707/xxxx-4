import { userRepo } from '$/domain/repository/userRepo';
import { prismaClient } from '$/service/prismaClient';
import { defineController } from 'frourio';

export default defineController(() => ({
  post: async ({ body }) => {
    const newUser = await userRepo.create(prismaClient, body);
    return { status: 201, body: newUser };
  },
}));
