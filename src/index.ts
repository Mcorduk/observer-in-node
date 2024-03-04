import { User } from "./observers/User";
import { NotificationService } from "./subjects/notification.service";

const notificationService = new NotificationService();

const user1 = new User("User 1");
const user2 = new User("User 2");
const user3 = new User("User 3");

notificationService.registerObserver(user1);
notificationService.registerObserver(user2);
notificationService.registerObserver(user3);

notificationService.notifyObservers("This is a test notification!");
