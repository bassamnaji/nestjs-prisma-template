import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LoggingInterceptor } from '@src/common/interceptors/performance.interceptor'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import helmet from 'helmet'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })
    app.setGlobalPrefix('api')
    app.use(cookieParser())
    app.use(helmet())
    app.useGlobalInterceptors(new LoggingInterceptor())
    const configService = app.get(ConfigService)
    const config = new DocumentBuilder()
        .setTitle('Title')
        .setDescription('Description')
        .setVersion('1.0')
        .addBearerAuth()
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('docs', app, document)
    await app.listen(configService.get<number>('app.port', 8000))
}
bootstrap()
