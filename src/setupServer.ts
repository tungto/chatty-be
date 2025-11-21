import {
  Application,
  urlencoded,
  json,
  Response,
  Request,
  NextFunction,
} from "express";
import http from "http";
import cookieSession from "cookie-session";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import compression from "compression";

require("express-async-errors");

const PORT = process.env.PORT || 3001;

export class ChattyServer {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routesMiddleware(this.app);
    this.globalErrorHandler(this.app);
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: "session",
        keys: ["test1", "test2"],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        secure: process.env.NODE_ENV === "production",
      }),
    );

    app.use(hpp());
    app.use(helmet());
    app.use(
      cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ["GET", "POST", "PUT", "DELETE"],
      }),
    );
  }

  private standardMiddleware(app: Application): void {
    app.use(compression());
    app.use(json({ limit: "50mb" }));
    app.use(urlencoded({ extended: true, limit: "50mb" }));
  }

  private routesMiddleware(app: Application): void {}

  private globalErrorHandler(app: Application): void {}

  private startServer(port: number): void {}

  private createSocketServer(httpServer: http.Server): void {}

  private startHttpServer(httpServer: http.Server): void {
    httpServer.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
}
