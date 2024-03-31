import { ReactiveElement } from "lit";
declare class HaMarkdownElement extends ReactiveElement {
    content?: any;
    allowSvg: boolean;
    breaks: boolean;
    lazyImages: boolean;
    protected createRenderRoot(): this;
    protected update(changedProps: any): void;
    private _render;
    private _resize;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-markdown-element": HaMarkdownElement;
    }
}
export {};
