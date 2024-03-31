import { LitElement, PropertyValues, nothing } from "lit";
import "../../panels/logbook/ha-logbook";
import type { HomeAssistant } from "../../types";
export declare class MoreInfoLogbook extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    private _showMoreHref;
    private _time;
    private _entityIdAsList;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues): void;
    private _close;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-logbook": MoreInfoLogbook;
    }
}
