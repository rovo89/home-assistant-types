import { HomeAssistant } from "../types";
export interface BasePerson {
    name: string;
    picture?: string;
}
export interface Person extends BasePerson {
    id: string;
    user_id?: string;
    device_trackers?: string[];
}
export interface PersonMutableParams {
    name: string;
    user_id: string | null;
    device_trackers: string[];
    picture: string | null;
}
export declare const fetchPersons: (hass: HomeAssistant) => Promise<{
    storage: Person[];
    config: Person[];
}>;
export declare const createPerson: (hass: HomeAssistant, values: PersonMutableParams) => Promise<Person>;
export declare const updatePerson: (hass: HomeAssistant, personId: string, updates: Partial<PersonMutableParams>) => Promise<Person>;
export declare const deletePerson: (hass: HomeAssistant, personId: string) => Promise<unknown>;
