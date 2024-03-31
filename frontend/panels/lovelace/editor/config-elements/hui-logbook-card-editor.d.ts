import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entities-picker";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { LogbookCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiLogbookCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: LogbookCardConfig): void;
    get _entities(): string[];
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _entitiesChanged;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-logbook-card-editor": HuiLogbookCardEditor;
    }
}
