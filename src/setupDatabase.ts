import dotenv from "dotenv";
// `mongoose.connect('mongodb://localhost:27017/<your-database-name>')`;

// If you use a more recent version of mongoose, and you get the error with mongodb connection, just change `localhost` to `127.0.0.1`.
//
//   `mongoose.connect('mongodb://127.0.0.1:27017/<your-database-name>')`

import mongoose from "mongoose";

export default () => {
  const connect = (params: any) => {
    mongoose
      .connect(`mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`, params)
      .then((params) => {
        console.log("Connected to MongoDB");
      })
      .catch((error) => {
        console.log("Error connecting to database", error);
        return process.exit(1); // Exit application gracefully
      });
  };

  connect({});

  /**
   *  Disconnect from MongoDB when the application closes
   *
   */
  mongoose.connection.on("disconnected", () =>
    connect({ useNewUrlParser: true }),
  );
};
