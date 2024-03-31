import { UpdateUserParams, User } from "../../../data/user";
export interface UserDetailDialogParams {
    entry: User;
    updateEntry: (updates: Partial<UpdateUserParams>) => Promise<unknown>;
    removeEntry: () => Promise<boolean>;
}
export declare const loadUserDetailDialog: () => Promise<typeof import("./dialog-user-detail")>;
export declare const showUserDetailDialog: (element: HTMLElement, detailParams: UserDetailDialogParams) => void;
