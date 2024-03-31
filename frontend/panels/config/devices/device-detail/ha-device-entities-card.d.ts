import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon";
import "../../../../components/ha-list-item";
import type { HomeAssistant } from "../../../../types";
import { EntityRegistryStateEntry } from "../ha-config-device-page";
export declare class HaDeviceEntitiesCard extends LitElement {
    header: string;
    deviceName: string;
    hass: HomeAssistant;
    entities: EntityRegistryStateEntry[];
    showHidden: boolean;
    private _extDisabledEntityEntries?;
    private _entityRows;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult;
    private _toggleShowHidden;
    private _renderEntity;
    private _renderEntry;
    private _openEditEntry;
    private _addToLovelaceView;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-entities-card": HaDeviceEntitiesCard;
    }
}
