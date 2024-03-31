import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-picker";
import type { HaEntityPickerEntityFilterFunc } from "../../../components/entity/ha-entity-picker";
import "../../../components/ha-icon-button";
import "../../../components/ha-sortable";
import { HomeAssistant } from "../../../types";
import { EntityConfig } from "../entity-rows/types";
export declare class HuiEntityEditor extends LitElement {
    hass?: HomeAssistant;
    entities?: EntityConfig[];
    entityFilter?: HaEntityPickerEntityFilterFunc;
    label?: string;
    private _entityKeys;
    private _getKey;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _addEntity;
    private _entityMoved;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-editor": HuiEntityEditor;
    }
}
