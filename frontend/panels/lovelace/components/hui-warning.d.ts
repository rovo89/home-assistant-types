import { LitElement, TemplateResult } from "lit";
import "../../../components/ha-alert";
import { HomeAssistant } from "../../../types";
export declare const createEntityNotFoundWarning: (hass: HomeAssistant, entityId: string) => string;
export declare class HuiWarning extends LitElement {
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-warning": HuiWarning;
    }
}
