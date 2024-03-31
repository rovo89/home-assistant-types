export type FilterFunc = (entityId: string) => boolean;
export interface EntityFilter {
    include_domains: string[];
    include_entities: string[];
    exclude_domains: string[];
    exclude_entities: string[];
}
export declare const isEmptyFilter: (filter: EntityFilter) => boolean;
export declare const generateFilter: (includeDomains?: string[], includeEntities?: string[], excludeDomains?: string[], excludeEntities?: string[]) => FilterFunc;
