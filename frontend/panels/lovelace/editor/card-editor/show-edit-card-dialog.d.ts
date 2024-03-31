import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import { LovelaceContainerPath } from "../lovelace-path";
export type EditCardDialogParams = {
    lovelaceConfig: LovelaceConfig;
    saveConfig: (config: LovelaceConfig) => void;
    path: LovelaceContainerPath;
} & ({
    cardIndex: number;
} | {
    cardConfig: LovelaceCardConfig;
});
export declare const importEditCardDialog: () => Promise<typeof import("./hui-dialog-edit-card")>;
export declare const showEditCardDialog: (element: HTMLElement, editCardDialogParams: EditCardDialogParams) => void;
