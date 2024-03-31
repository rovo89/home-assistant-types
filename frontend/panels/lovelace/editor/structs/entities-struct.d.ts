export declare const entitiesConfigStruct: import("superstruct").Struct<string | {
    entity: string;
    name: string;
    icon: string;
    secondary_info: string;
    image: string;
    state_color: boolean;
    format: "time" | "date" | "datetime" | "relative" | "total";
    double_tap_action?: any;
    hold_action?: any;
    tap_action?: any;
}, null>;
