export class StringHelper {
    static toCamelCase(str: string): string {
        return str.replace(/[-_\s]([a-zA-Z0-9])/g, group => group.toUpperCase())
    }

    static toKebabCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    }

    static toSnakeCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
    }
}
