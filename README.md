# Notification Service with Observer Pattern in Node.js and TypeScript

This project demonstrates the Observer design pattern in a Node.js application using TypeScript. The Observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes.

In this project, the notification service is the subject, and the users are the observers. When the notification service sends a notification, all registered users will receive the notification.

## Features

- Traditional Observer Pattern Implementation
- Event Emitter Implementation
- Persistence with MongoDB
- HTTP API with Express
- Real-Time Communication with Socket.IO

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/notification-service.git
cd notification-service
npm install
```

Start the MongoDB database with Docker Compose:

```bash
docker-compose up -d
```
Start the server:


```bash
npm start
```
The server runs on port 3000.

## Branches

This repository contains several branches showcasing different stages of the application development:

- `main`: This branch contains the final form of the application with all features implemented.

- `traditional-class-based`: This branch demonstrates the initial class-based implementation of the Observer pattern.

- `event-emitter`: This branch shows the refactoring of the application to use Node.js's built-in EventEmitter for the Observer pattern.

- `persistence-and-api`: In this branch, persistence is added to the application using MongoDB, and an HTTP API is exposed using Express.

- `socket-server`: This branch extends the application with real-time communication capabilities using Socket.IO.

Please switch to the respective branch to view the code at each stage of the application development.

## Further Work
This project is a basic implementation of the Observer pattern. There are many ways you could extend it. For example, you could add authentication and authorization, use a real database in production, or scale up to handle more traffic.

## Conclusion
The Observer pattern is a powerful tool for creating flexible, decoupled code. It's particularly useful in event-driven applications, where you need to notify multiple objects of state changes. This project demonstrates how to use the Observer pattern in a Node.js application, and how to extend it with Socket.IO for real-time communication