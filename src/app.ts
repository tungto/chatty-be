import express, { Express } from "express";
import { ChattyServer } from "./setupServer";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server = new ChattyServer(app);
    server.start();
  }
}
const app = new Application();
app.initialize();
