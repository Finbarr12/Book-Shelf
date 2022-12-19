"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const multer_1 = __importDefault(require("../config/multer"));
const BookController_1 = require("../Controller/BookController");
router.route("/createbooks").post(multer_1.default, BookController_1.PostBooks);
router.route("/allbooks").get(BookController_1.GetAllBooks);
router.route("/onebook/:id").get(BookController_1.GetOneBook);
router.route("/viewBppks").patch(BookController_1.ViewBooks);
router.route("/search").get(BookController_1.SearchBooks);
router.route("/delete").delete(BookController_1.DeleteData);
router.route("/delete/:id").delete(BookController_1.DeleteOneData);
exports.default = router;
