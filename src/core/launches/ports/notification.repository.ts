import Notification from "../entities/notification";

export default interface NotificationRepository {
    save(notification: Notification): Promise<void>;
    findByLaunchId(id: string): Promise<Notification>;
    deleteById(id: string): Promise<void>;
}