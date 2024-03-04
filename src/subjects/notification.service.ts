import { Subject } from "../types/Subject";
import { Observer } from "../types/Observer";

export class NotificationService implements Subject {
  private observers: Observer[] = [];

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(message: string): void {
    for (let observer of this.observers) {
      observer.update(message);
    }
  }
}
