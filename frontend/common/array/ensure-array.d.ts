type NonUndefined<T> = T extends undefined ? never : T;
export declare function ensureArray(value: undefined): undefined;
export declare function ensureArray<T>(value: T | T[]): NonUndefined<T>[];
export declare function ensureArray<T>(value: T | readonly T[]): NonUndefined<T>[];
export {};
