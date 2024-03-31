import { CSSResultGroup } from "lit";
import { HaIconButton } from "./ha-icon-button";
export declare class HaIconButtonToggle extends HaIconButton {
    selected: boolean;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-toggle": HaIconButtonToggle;
    }
}
