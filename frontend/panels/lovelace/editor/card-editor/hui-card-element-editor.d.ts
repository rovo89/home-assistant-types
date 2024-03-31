import { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceCardEditor, LovelaceConfigForm } from "../../types";
import { HuiElementEditor } from "../hui-element-editor";
export declare class HuiCardElementEditor extends HuiElementEditor<LovelaceCardConfig> {
    protected getConfigElement(): Promise<LovelaceCardEditor | undefined>;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-element-editor": HuiCardElementEditor;
    }
}
