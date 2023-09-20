import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class PosNumberPipe implements PipeTransform<number> {
    transform(value: number) {
        let flag: boolean = false
        if (value < 0 || value > 2147483647) flag = true
        if (flag) throw new BadRequestException('Invalid number')
        return value
    }
}
