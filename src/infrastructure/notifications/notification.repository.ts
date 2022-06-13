import Notification from "../../core/launches/entities/notification";
import NotificationRepository from "../../core/launches/ports/notification.repository";

export default class NotificationRepositoryImpl implements NotificationRepository {
    private notifications: Map<number, Notification>;

    constructor() {
        this.notifications = new Map();
    }

    deleteById(id: number): Promise<void> {
        this.notifications.delete(id);
        return Promise.resolve();
    }

    save(notification: Notification): Promise<void> {
        this.notifications.set(notification.getLaunch().id, notification);
        return Promise.resolve();
    }

    findByLaunchId(id: number): Promise<Notification> {
        return Promise.resolve(this.notifications.get(id));
    }
}