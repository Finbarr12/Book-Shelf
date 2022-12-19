import { Router } from "express";

const router = Router();
import ViewImage from "../config/multer";
import {
  DeleteData,
  DeleteOneData,
  GetAllBooks,
  GetOneBook,
  PostBooks,
  SearchBooks,
  ViewBooks,
} from "../Controller/BookController";

router.route("/createbooks").post(ViewImage, PostBooks);
router.route("/allbooks").get(GetAllBooks);
router.route("/onebook/:id").get(GetOneBook);
router.route("/viewBppks").patch(ViewBooks);
router.route("/search").get(SearchBooks);
router.route("/delete").delete(DeleteData);
router.route("/delete/:id").delete(DeleteOneData);

export default router;
