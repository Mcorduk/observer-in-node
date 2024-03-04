# Notification Service with Observer Pattern in Node.js and TypeScript

This is the `persistence-and-api` branch. Here, we have added persistence to the application using MongoDB, allowing us to store and retrieve users and notifications. We have also exposed an HTTP API using Express, allowing other applications to interact with our notification service. The Observer pattern is used to notify all registered users when a new notification is created via the API.

The Observer pattern is primarily about in-memory objects and their interactions. It doesn't inherently address persistence, which is the ability to store state changes (in this case, notifications) for later retrieval or for resilience against system failures. This is because the Observer pattern is focused on the communication between objects, not how the state is stored.

In a real-world application, however, persistence is crucial. Users would want to see past notifications, and we would want to keep a record of all notifications sent. Moreover, if the system crashes or restarts, without persistence, all the current state would be lost, including the list of observers and the state of the subject.

To solve this, we can use a database to store the state changes. In this branch, we have used MongoDB to store the notifications. When a new notification is created, it is saved to the database in addition to being broadcast to all observers. This way, we can retrieve past notifications from the database, and the state is preserved even if the system restarts.

However, adding persistence introduces a new set of challenges, such as synchronizing the in-memory state with the database, handling database failures, and managing database connections. These are separate concerns that are beyond the scope of the Observer pattern, but they are important considerations in a real-world application. Please keep these points in mind in your own implementations.