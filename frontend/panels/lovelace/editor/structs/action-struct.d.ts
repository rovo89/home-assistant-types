export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "none" | "url" | "toggle" | "call-service" | "more-info" | "navigate" | "assist";
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
}, {
    action: import("superstruct").Struct<"none" | "url" | "toggle" | "call-service" | "more-info" | "navigate" | "assist", {
        none: "none";
        url: "url";
        toggle: "toggle";
        "call-service": "call-service";
        "more-info": "more-info";
        navigate: "navigate";
        assist: "assist";
    }>;
    confirmation: import("superstruct").Struct<boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    }, null>;
}>;
export declare const actionConfigStruct: import("superstruct").Struct<any, null>;
