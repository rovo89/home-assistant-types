import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-blueprint-picker";
import "../../../components/ha-card";
import "../../../components/ha-circular-progress";
import "../../../components/ha-markdown";
import "../../../components/ha-selector/ha-selector";
import "../../../components/ha-settings-row";
import { BlueprintAutomationConfig } from "../../../data/automation";
import { BlueprintOrError, Blueprints } from "../../../data/blueprint";
import { BlueprintScriptConfig } from "../../../data/script";
import { HomeAssistant } from "../../../types";
export declare abstract class HaBlueprintGenericEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    disabled: boolean;
    narrow: boolean;
    protected _blueprints?: Blueprints;
    protected firstUpdated(changedProps: any): void;
    protected get _blueprint(): BlueprintOrError | undefined;
    protected abstract get _config(): BlueprintAutomationConfig | BlueprintScriptConfig;
    protected renderCard(): import("lit-html").TemplateResult<1>;
    protected abstract _getBlueprints(): any;
    private _blueprintChanged;
    private _inputChanged;
    private _itemMoved;
    protected _duplicate(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "blueprint-generic-editor": HaBlueprintGenericEditor;
    }
}
