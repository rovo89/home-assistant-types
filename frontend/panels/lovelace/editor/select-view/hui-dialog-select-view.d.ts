import "@material/mwc-button/mwc-button";
import "@material/mwc-list/mwc-list";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-list/mwc-radio-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-icon";
import "../../../../components/ha-select";
import { HomeAssistant } from "../../../../types";
import type { SelectViewDialogParams } from "./show-select-view-dialog";
declare global {
    interface HASSDomEvents {
        "view-selected": {
            view: number;
        };
    }
}
export declare class HuiDialogSelectView extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _dashboards;
    private _urlPath?;
    private _config?;
    private _selectedViewIdx;
    showDialog(params: SelectViewDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getDashboards;
    private _dashboardChanged;
    private _viewChanged;
    private _selectView;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-select-view": HuiDialogSelectView;
    }
}
