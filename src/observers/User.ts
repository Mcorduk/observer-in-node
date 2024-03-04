import { Observer } from "../types/Observer";

export class User implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received a notification: ${message}`);
  }
}
