export declare const UNAVAILABLE = "unavailable";
export declare const UNKNOWN = "unknown";
export declare const ON = "on";
export declare const OFF = "off";
export declare const UNAVAILABLE_STATES: readonly ["unavailable", "unknown"];
export declare const OFF_STATES: readonly ["unavailable", "unknown", "off"];
export declare const isUnavailableState: (searchElement: unknown, fromIndex?: number) => searchElement is "unknown" | "unavailable";
export declare const isOffState: (searchElement: unknown, fromIndex?: number) => searchElement is "unknown" | "unavailable" | "off";
