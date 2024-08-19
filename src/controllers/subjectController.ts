import { NextFunction, Request, Response } from "express";
import { SubjectModel } from "../models/subject";

const asyncHandler = require("express-async-handler");

exports.subject_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    SubjectModel.find()
      .then((subjects) => {
        res.json({ subjects: subjects });
      })
      .catch((err) => {
        res.status(500).send("Error finding subjects");
      });
  }
);

exports.subject_detail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(`Not Implemented: subject Detail: ${req.params.id}`);
  }
);

exports.subject_create_post = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const newSubject = new SubjectModel(req.body);
  
      // Check if subject already exists based on english_name or chinese_name
      const existingSubjectEnglish = await SubjectModel.findOne({ english_name: req.body.english_name });
      const existingSubjectChinese = await SubjectModel.findOne({ chinese_name: req.body.chinese_name });
  
      if (existingSubjectEnglish || existingSubjectChinese) {
        res.status(400).send(`Subject ${req.body.english_name} or ${req.body.chinese_name} already exists!`);
        return;
      }
  
      // If no duplicates found, create the new subject
      SubjectModel.create(newSubject)
        .then((result) => {
          res.send(`Subject ${req.body.english_name} created successfully`);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Error creating new subject");
        });
    }
  );

exports.subject_delete_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Not Implemented: subject delete GET");
  }
);

exports.subject_delete_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Not Implemented: subject delete POST");
  }
);

exports.subject_update_get = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Not Implemented: subject Update GET");
  }
);

exports.subject_update_post = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Not Implemented: subject Update POST");
  }
);
