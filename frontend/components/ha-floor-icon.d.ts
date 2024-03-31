import { LitElement } from "lit";
import { FloorRegistryEntry } from "../data/floor_registry";
import "./ha-icon";
import "./ha-svg-icon";
export declare const floorDefaultIconPath: (floor: Pick<FloorRegistryEntry, "level">) => string;
export declare class HaFloorIcon extends LitElement {
    floor: Pick<FloorRegistryEntry, "icon" | "level">;
    icon?: string;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-floor-icon": HaFloorIcon;
    }
}
