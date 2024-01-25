import { userRepo } from '$/domain/repository/userRepo';
import { prismaClient } from '$/service/prismaClient';
import { defineController } from 'frourio';

export default defineController(() => ({
  put: async ({ params, body }) => {
    const updatedUser = await userRepo.update(prismaClient, params.userId, body);
    return { status: 200, body: updatedUser };
  },
  delete: async ({ params }) => {
    await userRepo.delete(prismaClient, params.userId);
    return { status: 204 };
  },
}));
