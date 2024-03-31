import "@material/mwc-button/mwc-button";
import { HassEntity } from "home-assistant-js-websocket";
import "../../../components/ha-alert";
import { BlueprintAutomationConfig } from "../../../data/automation";
import { HaBlueprintGenericEditor } from "../blueprint/blueprint-generic-editor";
export declare class HaBlueprintAutomationEditor extends HaBlueprintGenericEditor {
    config: BlueprintAutomationConfig;
    stateObj?: HassEntity;
    protected get _config(): BlueprintAutomationConfig;
    protected render(): import("lit-html").TemplateResult<1>;
    protected _getBlueprints(): Promise<void>;
    private _enable;
}
declare global {
    interface HTMLElementTagNameMap {
        "blueprint-automation-editor": HaBlueprintAutomationEditor;
    }
}
