import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-icon-button";
import { LawnMowerEntity } from "../../../data/lawn_mower";
import { HomeAssistant } from "../../../types";
declare class MoreInfoLawnMower extends LitElement {
    hass: HomeAssistant;
    stateObj?: LawnMowerEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _deviceEntities;
    private _renderBattery;
    private callService;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-lawn_mower": MoreInfoLawnMower;
    }
}
export {};
