import { EventEmitter } from "events";

class User {
  constructor(private name: string, private eventEmitter: EventEmitter) {
    this.eventEmitter.on("notification", (message: string) => {
      console.log(`${this.name} received a notification: ${message}`);
    });
  }
}

const eventEmitter = new EventEmitter();

const user1 = new User("User 1", eventEmitter);
const user2 = new User("User 2", eventEmitter);
const user3 = new User("User 3", eventEmitter);

eventEmitter.emit("notification", "This is a test notification!");
