export interface QuickBarParams {
    entityFilter?: string;
    commandMode?: boolean;
    hint?: string;
}
export declare const loadQuickBar: () => Promise<typeof import("./ha-quick-bar")>;
export declare const showQuickBar: (element: HTMLElement, dialogParams: QuickBarParams) => void;
