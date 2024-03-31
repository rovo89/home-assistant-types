import { MarkedOptions } from "marked";
declare const api: {
    renderMarkdown: (content: string, markedOptions: MarkedOptions, hassOptions?: {
        allowSvg?: boolean;
    }) => Promise<string>;
};
export type Api = typeof api;
export {};
