import { nothing } from "lit";
import type { GridCardConfig } from "../../cards/types";
import { HuiStackCardEditor } from "./hui-stack-card-editor";
export declare class HuiGridCardEditor extends HuiStackCardEditor {
    setConfig(config: Readonly<GridCardConfig>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-grid-card-editor": HuiGridCardEditor;
    }
}
