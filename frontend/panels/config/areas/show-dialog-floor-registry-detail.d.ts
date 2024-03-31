import { FloorRegistryEntry, FloorRegistryEntryMutableParams } from "../../../data/floor_registry";
export interface FloorRegistryDetailDialogParams {
    entry?: FloorRegistryEntry;
    createEntry?: (values: FloorRegistryEntryMutableParams) => Promise<unknown>;
    updateEntry?: (updates: Partial<FloorRegistryEntryMutableParams>) => Promise<unknown>;
}
export declare const loadFloorRegistryDetailDialog: () => Promise<typeof import("./dialog-floor-registry-detail")>;
export declare const showFloorRegistryDetailDialog: (element: HTMLElement, systemLogDetailParams: FloorRegistryDetailDialogParams) => void;
