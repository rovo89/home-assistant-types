import { ItemPath } from "../../types";
export declare function nestedArrayMove<A>(obj: A, oldIndex: number, newIndex: number, oldPath?: ItemPath, newPath?: ItemPath): A;
export declare function arrayMove<T = any>(array: T[], oldIndex: number, newIndex: number): T[];
