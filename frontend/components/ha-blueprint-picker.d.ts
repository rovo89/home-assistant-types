import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import { BlueprintDomain, Blueprints } from "../data/blueprint";
import { HomeAssistant } from "../types";
import "./ha-select";
declare class HaBluePrintPicker extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    value: string;
    domain: BlueprintDomain;
    blueprints?: Blueprints;
    disabled: boolean;
    open(): void;
    private _processedBlueprints;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: any): void;
    private _blueprintChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-blueprint-picker": HaBluePrintPicker;
    }
}
export {};
