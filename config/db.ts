import mongoose from "mongoose";

const liveURI =
  "mongodb+srv://FinbarrDB:codelab06@cluster0.2xzneqt.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(liveURI);

mongoose.connection
  .on("open", () => {
    console.log("Db is on for use");
  })
  .once("error", (error) => {
    console.log("An error coccured", error);
  });
