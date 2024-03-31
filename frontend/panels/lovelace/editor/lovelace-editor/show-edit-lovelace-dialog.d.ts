import { Lovelace } from "../../types";
declare global {
    interface HASSDomEvents {
        "show-edit-lovelace": Lovelace;
    }
}
export declare const showEditLovelaceDialog: (element: HTMLElement, lovelace: Lovelace) => void;
