import { NextFunction, Request, Response } from "express"
import { TutorModel } from "../models/tutor"
import { SubjectModel } from "../models/subject"
import { parse } from "path"

const asyncHandler = require('express-async-handler')

interface resultType {
    subject:  string,
    dseResult: Number
  }

exports.tutor_list = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    const tutorList = await TutorModel.find({}, "_id")

    if(tutorList.length === 0){
        res.send("No tutors found");
        return;
    }

    res.json(tutorList)
})

exports.tutor_detail = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{

    const tutorDetail = await TutorModel.findById(req.params.id)

    if(!tutorDetail){
        res.status(404).send(`Tutor with ID ${req.params.id} not found`)
        return;
    }

    res.json(tutorDetail)
})

exports.tutor_create_post = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{

    // Check if tutor already exists based on email
    const existingTutor = await TutorModel.findOne({}).where("contact_number").equals(req.body.contact_number)

    if(existingTutor){
        res.status(400).send(`Tutor with phone number ${req.body.contact_number} already exists!`)
        return;
    }

    // Check if all subjects in exam_results exist
    const allSubjects = await SubjectModel.find()

    let subjectNotFound = false;

    req.body.exam_results = JSON.parse(req.body.exam_results)

    const exam_results = req.body.exam_results.map((exam_result: resultType) => {
        const subjectFound = allSubjects.find((s: any) => s.english_name === exam_result.subject)

        if(!subjectFound){
            subjectNotFound = true;
            return;
        }

        return {
            subject: subjectFound._id,
            dseResult: exam_result.dseResult
        }

    })

    if(subjectNotFound) {
        res.status(400).send("One or more subjects in exam_results do not exist")
        return;
    }

    // If no duplicates found, create the new tutor
    const newTutor = new TutorModel({exam_result:exam_results,  available: true, ...req.body})


    TutorModel.create(newTutor)
        .then((result: any)=>{
            res.send(`Tutor #${req.body.tutorID} created successfully`)
        })
        .catch((err: any)=>{
            console.error(err)
            res.status(500).send("Error creating new tutor")
        })
    
})

exports.tutor_delete_get = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: tutor delete GET")
})

exports.tutor_delete_post = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: tutor delete POST")
})

exports.tutor_update_get = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: tutor Update GET")
})

exports.tutor_update_post = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: tutor Update POST")
})