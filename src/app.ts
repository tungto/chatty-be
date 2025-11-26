import express, { Express } from "express";
import { ChattyServer } from "./setupServer";
import setupDatabase from "./setupDatabase";

class Application {
  public initialize(): void {
    setupDatabase();
    const app: Express = express();
    const server = new ChattyServer(app);
    server.start();
  }
}
const app = new Application();
app.initialize();
