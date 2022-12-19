import BookModel from "../Model/BookModel";
import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";

const PostBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { Author, Title, Summary, Views, Category } = req.body;

    const CloudImg = await cloudinary.uploader.upload(req?.file!.path);
    const isbn1 = Math.floor(Math.random() * 1000);
    const isbn2 = Math.floor(Math.random() * 1000);
    const isbn3 = Math.floor(Math.random() * 1000);
    const isbn4 = Math.floor(Math.random() * 1000);

    const CreatedBooks = await BookModel.create({
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
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const GetAllBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const Getbooks = await BookModel.find();

    return res.status(200).json({
      message: "Gotten successfully",
      data: Getbooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const GetOneBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const GetOne = await BookModel.findById(req.params.id);

    return res.status(200).json({
      message: "Gotten successfully",
      data: GetOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const ViewBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const Viewed = await BookModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: { Views: req.body.ip },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Gotten successfully",
      data: Viewed,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const SearchBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const queryData = req.query;
    const makeSearch = await BookModel.find(queryData);

    return res.status(200).json({
      message: "Gotten successfully",
      data: makeSearch,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

const DeleteData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const DeleteData = await BookModel.remove();
    return res.status(200).json({
      message: "deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};
const DeleteOneData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const DeleteData = await BookModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

export {
  PostBooks,
  GetAllBooks,
  GetOneBook,
  ViewBooks,
  SearchBooks,
  DeleteData,
  DeleteOneData,
};
