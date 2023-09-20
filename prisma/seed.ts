import { PrismaClient } from '@prisma/client'
import { UserSeed } from './seeders/user/user.seed'

const prisma = new PrismaClient()

async function main() {
    // seed the database with some data
    await new UserSeed().seedUsersWithPosts()
}

// execute the main function
main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect()
    })
