export interface Icons {
    [key: string]: string;
}
export interface Chunks {
    [key: string]: Promise<Icons>;
}
export declare const iconStore: import("idb-keyval").UseStore;
export declare const MDI_PREFIXES: string[];
export declare const getIcon: (iconName: string) => Promise<string>;
export declare const findIconChunk: (icon: string) => string;
export declare const writeCache: (chunks: Chunks) => Promise<void>;
export declare const checkCacheVersion: () => Promise<void>;
