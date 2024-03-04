# Notification Service with Observer Pattern in Node.js and TypeScript

This is the `event-emitter` branch. In this branch, we have refactored the application to use Node.js's built-in EventEmitter for the Observer pattern. This provides a more idiomatic way of implementing the pattern in Node.js. The EventEmitter (subject) emits events (state changes), and any registered listeners (observers) respond to those events.

You can see this implementation is far more simpler since Node has observer pattern implementation as `EventEmitter` already.