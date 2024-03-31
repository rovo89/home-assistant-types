import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-icon-button";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import { HomeAssistant } from "../../../types";
import { LovelaceRowConfig } from "../entity-rows/types";
declare global {
    interface HASSDomEvents {
        "entities-changed": {
            entities: LovelaceRowConfig[];
        };
    }
}
export declare class HuiEntitiesCardRowEditor extends LitElement {
    hass?: HomeAssistant;
    entities?: LovelaceRowConfig[];
    label?: string;
    private _entityKeys;
    private _getKey;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _addEntity;
    private _rowMoved;
    private _removeRow;
    private _valueChanged;
    private _editRow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-card-row-editor": HuiEntitiesCardRowEditor;
    }
}
