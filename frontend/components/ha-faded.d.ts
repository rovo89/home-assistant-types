import { CSSResultGroup, LitElement, TemplateResult } from "lit";
declare class HaFaded extends LitElement {
    fadedHeight: number;
    _contentShown: boolean;
    protected render(): TemplateResult;
    get _slottedHeight(): number;
    private _setShowContent;
    protected firstUpdated(changedProps: any): void;
    private _showContent;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-faded": HaFaded;
    }
    interface HASSDomEvents {
        "content-resize": undefined;
    }
}
export {};
