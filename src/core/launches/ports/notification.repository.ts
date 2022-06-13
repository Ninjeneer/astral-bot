import Notification from "../entities/notification";

export default interface NotificationRepository {
    save(notification: Notification): Promise<void>;
    findByLaunchId(id: number): Promise<Notification>;
    deleteById(id: number): Promise<void>;
}