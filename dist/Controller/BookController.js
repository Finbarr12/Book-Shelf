"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneData = exports.DeleteData = exports.SearchBooks = exports.ViewBooks = exports.GetOneBook = exports.GetAllBooks = exports.PostBooks = void 0;
const BookModel_1 = __importDefault(require("../Model/BookModel"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const PostBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Author, Title, Summary, Views, Category } = req.body;
        const CloudImg = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const isbn1 = Math.floor(Math.random() * 1000);
        const isbn2 = Math.floor(Math.random() * 1000);
        const isbn3 = Math.floor(Math.random() * 1000);
        const isbn4 = Math.floor(Math.random() * 1000);
        const CreatedBooks = yield BookModel_1.default.create({
            Author,
            Title,
            Summary,
            Views,
            Category,
            CoverImage: CloudImg.secure_url,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            AuthorImg: Author.charAt().toUpperCase(),
        });
        return res.status(201).json({
            message: "Created successfully",
            data: CreatedBooks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.PostBooks = PostBooks;
const GetAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Getbooks = yield BookModel_1.default.find();
        return res.status(200).json({
            message: "Gotten successfully",
            data: Getbooks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.GetAllBooks = GetAllBooks;
const GetOneBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const GetOne = yield BookModel_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "Gotten successfully",
            data: GetOne,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.GetOneBook = GetOneBook;
const ViewBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Viewed = yield BookModel_1.default.findByIdAndUpdate(req.params.id, {
            $push: { Views: req.body.ip },
        }, { new: true });
        return res.status(200).json({
            message: "Gotten successfully",
            data: Viewed,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.ViewBooks = ViewBooks;
const SearchBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = req.query;
        const makeSearch = yield BookModel_1.default.find(queryData);
        return res.status(200).json({
            message: "Gotten successfully",
            data: makeSearch,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.SearchBooks = SearchBooks;
const DeleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DeleteData = yield BookModel_1.default.remove();
        return res.status(200).json({
            message: "deleted successfully",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.DeleteData = DeleteData;
const DeleteOneData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DeleteData = yield BookModel_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "deleted successfully",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            error: error,
        });
    }
});
exports.DeleteOneData = DeleteOneData;
