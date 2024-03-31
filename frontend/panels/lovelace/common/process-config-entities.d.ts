import { LovelaceRowConfig } from "../entity-rows/types";
export declare const processConfigEntities: <T extends LovelaceRowConfig>(entities: Array<T | string>, checkEntityId?: boolean) => T[];
