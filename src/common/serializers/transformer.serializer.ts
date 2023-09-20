import { plainToClass } from 'class-transformer'

export class Serializer {
    public serialize<T, U>(data: T, DTOClass: new () => U): U {
        return plainToClass(DTOClass, data)
    }
}
