import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "./integrations-startup-time";
declare class DialogIntegrationStartup extends LitElement {
    hass: HomeAssistant;
    private _opened;
    showDialog(): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-integration-startup": DialogIntegrationStartup;
    }
}
export {};
