export namespace Enums {

    export enum Filter {
        Category = 1,
        Ingredient = 2
    }

    export class Utils {
        public static getEnumValues(enumType): Array<number> {
            const arr = [],
                values = Object.values(enumType).filter(x => typeof x == 'number');

            const len = values.length;

            for (let i = 0; i < len; i++)
                arr.push(values[i]);

            return arr;
        }

        public static getEnumKeys(enumType): Array<string> {
            const arr = [],
                keys = Object.values(enumType).filter(x => typeof x != 'number');

            const len = keys.length;

            for (let i = 0; i < len; i++)
                arr.push(keys[i]);

            return arr;
        }

        public static getEnumKeysAndValues(enumType): Array<{ Key: string, Value: number }> {
            const arr = [],
                values = Utils.getEnumValues(enumType),
                keys = Utils.getEnumKeys(enumType);

            const len = keys.length;

            for (let i = 0; i < len; i++)
                arr.push({ Key: keys[i], Value: values[i] });

            return arr;
        }
    }
}