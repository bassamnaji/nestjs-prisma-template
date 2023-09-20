import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import config from './config/config'
import { PrismaModule } from './provider/prisma/prisma.module'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { APP_GUARD } from '@nestjs/core'
import { UserModule } from '@src/module/user/user.module'
import { PostModule } from '@src/module/post/post.module'

@Module({
    imports: [
        PrismaModule,
        ThrottlerModule.forRoot([
            {
                ttl: 60,
                limit: 100,
            },
        ]),
        ConfigModule.forRoot({
            load: [config],
        }),
        UserModule,
        PostModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
})
export class AppModule {}
