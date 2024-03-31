import { InternalPropertyDeclaration } from "lit/decorators";
export declare const storage: (options: {
    key?: string;
    storage?: "localStorage" | "sessionStorage";
    subscribe?: boolean;
    state?: boolean;
    stateOptions?: InternalPropertyDeclaration;
}) => any;
