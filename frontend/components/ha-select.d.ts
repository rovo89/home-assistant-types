import { SelectBase } from "@material/mwc-select/mwc-select-base";
import { nothing } from "lit";
import "./ha-icon-button";
export declare class HaSelect extends SelectBase {
    icon: boolean;
    clearable: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    protected renderLeadingIcon(): typeof nothing | import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _clearValue;
    private _translationsUpdated;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-select": HaSelect;
    }
}
