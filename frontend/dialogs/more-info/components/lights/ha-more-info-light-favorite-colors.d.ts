import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../components/ha-control-slider";
import "../../../../components/ha-sortable";
import { ExtEntityRegistryEntry } from "../../../../data/entity_registry";
import { LightEntity } from "../../../../data/light";
import { HomeAssistant } from "../../../../types";
import "./ha-favorite-color-button";
declare global {
    interface HASSDomEvents {
        "favorite-color-edit-started": any;
    }
}
export declare class HaMoreInfoLightFavoriteColors extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _favoriteColors;
    protected updated(changedProps: PropertyValues): void;
    private _colorMoved;
    private _move;
    private _apply;
    private _save;
    private _add;
    private _edit;
    private _delete;
    private _handleDeleteButton;
    private _handleAddButton;
    private _handleColorAction;
    private _exitEditMode;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-light-favorite-colors": HaMoreInfoLightFavoriteColors;
    }
}
