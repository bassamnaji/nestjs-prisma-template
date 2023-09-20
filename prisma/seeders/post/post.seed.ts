import { Injectable } from '@nestjs/common'
import { PrismaClient, Post } from '@prisma/client'

@Injectable()
export class PostSeed {
    private prisma = new PrismaClient()
    private posts: Post[]

    async seedPosts(): Promise<Post[]> {
        this.posts = [
            await this.prisma.post.upsert({
                where: { id: 1 },
                update: {},
                create: {
                    title: 'Coding',
                    content: 'Coding is fun!',
                    published: true,
                },
            }),
        ]
        return this.posts
    }
}
