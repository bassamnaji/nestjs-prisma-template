import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class QueryParseStringPipe implements PipeTransform<string, string> {
    transform(value: string): string {
        let flag: boolean = false
        if (!value) return value
        if (value.length > 255) flag = true
        if (flag) throw new BadRequestException('Invalid string')
        return value
    }
}
