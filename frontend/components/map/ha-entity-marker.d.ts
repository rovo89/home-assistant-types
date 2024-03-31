import { LitElement } from "lit";
declare class HaEntityMarker extends LitElement {
    entityId?: string;
    entityName?: string;
    entityPicture?: string;
    entityColor?: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _badgeTap;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-marker": HaEntityMarker;
    }
}
export {};
