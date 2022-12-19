import mongoose from "mongoose";

interface BooksData {
  Author: string;
  Title: string;
  CoverImage: string;
  Summary: string;
  ISBN: string;
  Views: string;
  AuthorImg: string;
  Category: string;
}

interface Ebooks extends BooksData, mongoose.Document {}

const BooksDB = new mongoose.Schema({
  Author: String,
  Title: String,
  CoverImage: String,
  Summary: String,
  ISBN: String,
  Views: String,
  AuthorImg: String,
  Category: String,
});

export default mongoose.model<Ebooks>("EbookStore", BooksDB);
