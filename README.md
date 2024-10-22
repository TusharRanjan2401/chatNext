# ChatApp

A real-time highly scalable chat application built with Next.js, Node.js, Redis, Socket.IO, Kafka, and PostgreSQL. This application allows users to send and receive messages in real-time, supporting multiple chat rooms and a responsive user interface.

## Features

- Real-time messaging with Socket.IO
- Support for multiple chat rooms
- Message persistence with PostgreSQL
- Scalable message handling with Kafka
- Fast in-memory data store using Redis

## Technologies Used

- **Next.js** - React framework
- **Node.js** - JavaScript runtime for building server-side applications
- **Socket.IO** - For real-time communication
- **Kafka** - For handling multiple messages and streams
- **Redis** - In-memory data store for managing socket connections
- **PostgreSQL** - Relational database for message storage
- **Turbo** - For managing the monorepo structure
- **Aiven** - For running Kafka and PostgreSQL in a lightweight manner
- **Docker** - For containerizing Redis

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TusharRanjan2401/chatapp.git
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file in server folder

```bash
DATABASE_URL=your_postgres_database_url
```

4. Add redis_url and kafka_broker_url in Socket.ts and Kafka.ts respectively

5. For running Redis in Docker

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

6. Start the Aiven server for Kafka and PostgreSQL using its document

```bash
https://www.aiven.io
```

7. Start the project

```bash
npm run dev
```

Or

```bash
yarn dev
```

###Author

https://github.com/TusharRanjan2401
