import "@material/mwc-menu/mwc-menu-surface";
import { CSSResultGroup, LitElement } from "lit";
import type { HomeAssistant } from "../types";
export declare class HaFilterBlueprints extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    type?: "automation" | "script";
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    private _blueprints?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): Promise<void>;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _blueprintsSelected;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-blueprints": HaFilterBlueprints;
    }
}
