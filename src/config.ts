import dotenv from "dotenv";

dotenv.config();
class Config {
  public DATABASE_URL: string = process.env.DATABASE_URL || "";
  public PORT: number = parseInt(process.env.PORT || "3001");
  public MONGO_DB_NAME: string = process.env.MONGO_DB_NAME || "";
  public CORS_ORIGIN: string = process.env.CORS_ORIGIN || "";
  public SECRET_KEY_ONE: string = process.env.SECRET_KEY_ONE || "";
  public SECRET_KEY_TWO: string = process.env.SECRET_KEY_TWO || "";
  public CLIENT_URL: string = process.env.CLIENT_URL || "";
  public JWT_TOKEN: string = process.env.JWT_TOKEN || "";

  private readonly DEFAULT_DATABASE_URL: string =
    "mongodb://localhost:27017/chatty";

  constructor() {
    this.DATABASE_URL = this.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    this.PORT = this.PORT || 3001;
    this.MONGO_DB_NAME = this.MONGO_DB_NAME || "chatty";
    this.CORS_ORIGIN = this.CORS_ORIGIN || "*";
    this.SECRET_KEY_ONE = this.SECRET_KEY_ONE || "secret";
    this.SECRET_KEY_TWO = this.SECRET_KEY_TWO || "secret";
    this.CLIENT_URL = this.CLIENT_URL || "http://localhost:3000";
    this.JWT_TOKEN = this.JWT_TOKEN || "";
    console.log(this.DATABASE_URL);
  }

  public validateConfig(): boolean {
    for (const [key, value] of Object.entries(this)) {
      if (!value) throw new Error(`${key} is not defined`);
    }
    return true;
  }
}

const config = new Config();
export default config;
