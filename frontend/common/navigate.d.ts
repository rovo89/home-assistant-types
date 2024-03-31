declare global {
    interface HASSDomEvents {
        "location-changed": NavigateOptions;
    }
}
export interface NavigateOptions {
    replace?: boolean;
}
export declare const navigate: (path: string, options?: NavigateOptions) => void;
