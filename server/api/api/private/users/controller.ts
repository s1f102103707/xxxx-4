import { defineController } from 'frourio';
import { userRepo } from '$/domain/repository/userRepo';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  post: async ({ body }) => {
    const newUser = await userRepo.create(prismaClient, body);
    return { status: 201, body: newUser };
  }
}));
