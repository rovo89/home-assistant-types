import { LovelaceCardFeatureConfig, LovelaceCardFeatureContext } from "../../card-features/types";
import type { LovelaceConfigForm, LovelaceCardFeatureEditor } from "../../types";
import { HuiElementEditor } from "../hui-element-editor";
export declare class HuiCardFeatureElementEditor extends HuiElementEditor<LovelaceCardFeatureConfig, LovelaceCardFeatureContext> {
    protected getConfigElement(): Promise<LovelaceCardFeatureEditor | undefined>;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-feature-element-editor": HuiCardFeatureElementEditor;
    }
}
