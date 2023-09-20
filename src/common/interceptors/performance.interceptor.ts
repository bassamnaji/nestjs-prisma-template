import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now()
        return next
            .handle()
            .pipe(
                tap(() =>
                    console.log(
                        `\x1b[35mPerformance\x1b[0m => \x1b[33m${
                            Date.now() - now
                        }\x1b[90mms\x1b[0m`,
                    ),
                ),
            )
    }
}
