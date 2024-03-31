import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { YamlIntegrationDialogParams } from "./show-add-integration-dialog";
export declare class DialogYamlIntegration extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: YamlIntegrationDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-yaml-integration": DialogYamlIntegration;
    }
}
