import Notification from "../../core/launches/entities/notification";
import NotificationRepository from "../../core/launches/ports/notification.repository";

export default class NotificationRepositoryImpl implements NotificationRepository {
    private notifications: Map<string, Notification>;

    constructor() {
        this.notifications = new Map();
    }

    deleteById(id: string): Promise<void> {
        this.notifications.delete(id);
        return Promise.resolve();
    }

    save(notification: Notification): Promise<void> {
        this.notifications.set(notification.getLaunch().id, notification);
        return Promise.resolve();
    }

    findByLaunchId(id: string): Promise<Notification> {
        return Promise.resolve(this.notifications.get(id));
    }
}