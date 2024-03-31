import { CSSResultGroup, LitElement, TemplateResult, nothing } from "lit";
import "../../components/ha-control-button";
import "../../components/ha-control-button-group";
import "../../components/ha-control-slider";
import "../../components/ha-svg-icon";
import { CoverEntity } from "../../data/cover";
import { HomeAssistant } from "../../types";
type CoverButton = "open" | "close" | "stop" | "open-tilt" | "close-tilt" | "none";
type CoverLayout = {
    type: "line" | "cross";
    buttons: CoverButton[];
};
export declare const getCoverLayout: import("memoize-one").MemoizedFn<(stateObj: CoverEntity) => CoverLayout>;
export declare class HaStateControlCoverButtons extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    private _onOpenTap;
    private _onCloseTap;
    private _onOpenTiltTap;
    private _onCloseTiltTap;
    private _onStopTap;
    protected renderButton(button: CoverButton | undefined): typeof nothing | TemplateResult<1>;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-cover-buttons": HaStateControlCoverButtons;
    }
}
export {};
