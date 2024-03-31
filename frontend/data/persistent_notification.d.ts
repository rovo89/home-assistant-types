import { Connection, HassEntity, UnsubscribeFunc } from "home-assistant-js-websocket";
export interface PersitentNotificationEntity extends HassEntity {
    notification_id?: string;
    created_at?: string;
    title?: string;
    message?: string;
}
export interface PersistentNotification {
    created_at: string;
    message: string;
    notification_id: string;
    title: string;
    status: "read" | "unread";
}
export interface PersistentNotifications {
    [notificationId: string]: PersistentNotification;
}
export interface PersistentNotificationMessage {
    type: "added" | "removed" | "current" | "updated";
    notifications: PersistentNotifications;
}
export declare const subscribeNotifications: (conn: Connection, onChange: (notifications: PersistentNotification[]) => void) => UnsubscribeFunc;
