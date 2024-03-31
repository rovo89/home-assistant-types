import { LovelaceDashboardStrategyConfig } from "../../../../data/lovelace/config/types";
import { LovelaceStrategyEditor } from "../../strategies/types";
import { HuiElementEditor } from "../hui-element-editor";
export declare class HuiDashboardStrategyElementEditor extends HuiElementEditor<LovelaceDashboardStrategyConfig> {
    protected getConfigElement(): Promise<LovelaceStrategyEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dashboard-strategy-element-editor": HuiDashboardStrategyElementEditor;
    }
}
