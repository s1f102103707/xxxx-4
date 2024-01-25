import type { Prisma, User } from '@prisma/client';
import type { UserModel } from '$/api/@types/models';

const toModel = (prismaUser: User): UserModel => ({
  id: prismaUser.id,
  email: prismaUser.email,
  name: prismaUser.name,
  createdTime: prismaUser.createdAt.getTime(),
});

export const userRepo = {
  create: async (tx: Prisma.TransactionClient, newUser: { email: string; name?: string; }) => {
    const user = await tx.user.create({
      data: newUser
    });
    return toModel(user);
  },
  update: async (tx: Prisma.TransactionClient, userId: string, updateUser: { email?: string; name?: string; }) => {
    const user = await tx.user.update({
      where: { id: userId },
      data: updateUser
    });
    return toModel(user);
  },
  delete: async (tx: Prisma.TransactionClient, userId: string) => {
    await tx.user.delete({
      where: { id: userId }
    });
  },
  findById: async (tx: Prisma.TransactionClient, userId: string) => {
    const user = await tx.user.findUnique({
      where: { id: userId }
    });
    return user ? toModel(user) : null;
  },
  findAll: async (tx: Prisma.TransactionClient) => {
    const users = await tx.user.findMany();
    return users.map(toModel);
  }
};
