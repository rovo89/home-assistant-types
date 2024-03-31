import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-formfield";
import "../../../../components/ha-switch";
import { HomeAssistant } from "../../../../types";
import { MapCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import "../../components/hui-input-list-editor";
import { LovelaceCardEditor } from "../../types";
export declare const mapEntitiesConfigStruct: import("superstruct").Struct<string | {
    entity: string;
    name: string;
    focus: boolean;
    label_mode: string;
}, null>;
export declare class HuiMapCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    setConfig(config: MapCardConfig): void;
    get _geo_location_sources(): string[];
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _entitiesValueChanged;
    private _geoSourcesChanged;
    private _valueChanged;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-map-card-editor": HuiMapCardEditor;
    }
}
