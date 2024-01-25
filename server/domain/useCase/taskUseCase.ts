import { transaction } from '$/service/prismaClient';
import type { PrismaClient } from '@prisma/client';

export const taskUseCase = {
  create: (user: { id: string; name: string }, title: string, content: string) =>
    transaction<{ id: string; title: string; content: string }>(
      'RepeatableRead',
      async (tx: PrismaClient) => {
        const task = await tx.task.create({
          data: {
            title,
            content,
            userId: user.id,
          },
        });

        return {
          id: task.id,
          title: task.title,
          content: task.content,
        };
      }
    ),
};
