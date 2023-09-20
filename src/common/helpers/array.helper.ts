export class ArrayHelper {
    static removeItem<T>(array: T[], item: T): T[] {
        const index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1)
        }
        return array
    }

    static shuffle<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    static isEmpty<T>(array: T[]): boolean {
        return array.length === 0
    }
}
