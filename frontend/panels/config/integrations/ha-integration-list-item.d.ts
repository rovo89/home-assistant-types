import { GraphicType, ListItemBase } from "@material/mwc-list/mwc-list-item-base";
import { CSSResultGroup, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { IntegrationListItem } from "./dialog-add-integration";
export declare class HaIntegrationListItem extends ListItemBase {
    hass: HomeAssistant;
    integration?: IntegrationListItem;
    graphic: GraphicType;
    hasMeta: boolean;
    brand: boolean;
    protected renderSingleLine(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected renderGraphic(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected renderMeta(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-list-item": HaIntegrationListItem;
    }
}
