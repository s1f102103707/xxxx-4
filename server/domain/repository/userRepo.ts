import type { NewUser, UpdateUser, UserModel } from '$/api/@types';
import type { Prisma, User } from '@prisma/client';

const toModel = (prismaUser: User): UserModel => ({
  id: prismaUser.id,
  email: prismaUser.email,
  name: prismaUser.name || '',
  createdTime: prismaUser.createdAt.getTime(),
});

export const userRepo = {
  create: async (tx: Prisma.TransactionClient, newUser: NewUser) => {
    const user = await tx.user.create({
      data: { ...newUser, createdAt: new Date() },
    });
    return toModel(user);
  },
  update: async (tx: Prisma.TransactionClient, userId: string, updateUser: UpdateUser) => {
    const user = await tx.user.update({
      where: { id: userId },
      data: updateUser,
    });
    return toModel(user);
  },
  delete: async (tx: Prisma.TransactionClient, userId: string) => {
    await tx.user.delete({
      where: { id: userId },
    });
  },
  findById: async (tx: Prisma.TransactionClient, userId: string) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
    });
    return user ? toModel(user) : null;
  },
  findAll: async (tx: Prisma.TransactionClient) => {
    const users = await tx.user.findMany();
    return users.map(toModel);
  },
};
