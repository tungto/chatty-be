import express, { Express } from "express";
import { ChattyServer } from "./setupServer";
import setupDatabase from "./setupDatabase";
import config from "./config";

class Application {
  public initialize(): void {
    setupDatabase();
    const app: Express = express();
    const server = new ChattyServer(app);
    server.start();
    this.loadingConfig();
  }

  private loadingConfig(): void {
    config.validateConfig();
  }
}
const app = new Application();
app.initialize();
