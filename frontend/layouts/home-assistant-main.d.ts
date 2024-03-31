import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { HASSDomEvent } from "../common/dom/fire_event";
import "../components/ha-drawer";
import type { HomeAssistant, Route } from "../types";
import "./partial-panel-resolver";
declare global {
    interface HASSDomEvents {
        "hass-toggle-menu": undefined | {
            open?: boolean;
        };
        "hass-edit-sidebar": EditSideBarEvent;
        "hass-show-notifications": undefined;
    }
    interface HTMLElementEventMap {
        "hass-edit-sidebar": HASSDomEvent<EditSideBarEvent>;
        "hass-toggle-menu": HASSDomEvent<HASSDomEvents["hass-toggle-menu"]>;
    }
}
interface EditSideBarEvent {
    editMode: boolean;
}
export declare class HomeAssistantMain extends LitElement {
    hass: HomeAssistant;
    route?: Route;
    narrow: boolean;
    private _sidebarEditMode;
    private _externalSidebar;
    private _drawerOpen;
    constructor();
    protected render(): TemplateResult;
    protected firstUpdated(): void;
    willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private get _sidebarNarrow();
    private _drawerClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-assistant-main": HomeAssistantMain;
    }
}
export {};
