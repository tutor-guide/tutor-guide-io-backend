import { NextFunction, Request, Response } from "express";
import { SubjectModel } from "../models/subject";

const asyncHandler = require("express-async-handler");

exports.subject_list = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send("Not Implemented: subject List");
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

    SubjectModel.findOne({ english_name: req.body.english_name })
      .then((existingSubject) => {
        if (existingSubject) {
          res.status(400).send(`Subject ${req.body.english_name} already existed!`);
          return;
        }

        SubjectModel.create(newSubject)
          .then((result) => {
            res.send(`Subject ${req.body.english_name} created successfully`);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Error creating new subject");
          });
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
