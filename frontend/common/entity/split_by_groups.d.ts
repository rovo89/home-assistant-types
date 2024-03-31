import { HassEntities } from "home-assistant-js-websocket";
import { GroupEntity } from "../../data/group";
export declare const splitByGroups: (entities: HassEntities) => {
    groups: GroupEntity[];
    ungrouped: HassEntities;
};
