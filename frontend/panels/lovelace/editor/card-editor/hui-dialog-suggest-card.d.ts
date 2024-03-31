import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-yaml-editor";
import { HomeAssistant } from "../../../../types";
import "./hui-card-preview";
import { SuggestCardDialogParams } from "./show-suggest-card-dialog";
export declare class HuiDialogSuggestCard extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _cardConfig?;
    private _sectionConfig?;
    private _saving;
    private _yamlEditor?;
    showDialog(params: SuggestCardDialogParams): void;
    closeDialog(): void;
    private get _viewSupportsSection();
    private _renderPreview;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _pickCard;
    private _computeNewConfig;
    private _save;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-suggest-card": HuiDialogSuggestCard;
    }
}
