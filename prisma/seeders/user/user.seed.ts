import { Injectable } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'

@Injectable()
export class UserSeed {
    private prisma = new PrismaClient()
    private users: User[]

    async seedUsers(): Promise<User[]> {
        this.users = [
            await this.prisma.user.upsert({
                where: { id: 1 },
                update: {},
                create: {
                    name: 'test',
                    email: 'test@gmail.com',
                },
            }),
        ]
        return this.users
    }

    async seedUsersWithPosts(): Promise<User[]> {
        this.users = [
            await this.prisma.user.upsert({
                where: { id: 1 },
                update: {},
                create: {
                    name: 'test',
                    email: 'test@gmail.com',
                    posts: {
                        create: [
                            {
                                title: 'Coding',
                                content: 'Coding is fun!',
                                published: true,
                            },
                        ],
                    },
                },
            }),
        ]
        return this.users
    }

    async assignPostsToUser(): Promise<User[]> {
        this.users = [
            await this.prisma.user.update({
                where: { id: 1 },
                data: {
                    posts: {
                        connect: [
                            {
                                id: 1,
                            },
                        ],
                    },
                },
            }),
        ]
        return this.users
    }
}
