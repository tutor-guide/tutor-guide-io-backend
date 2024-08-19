import { NextFunction, Request, Response } from "express"
import { TutorModel } from "../models/tutor"

const asyncHandler = require('express-async-handler')

exports.tutor_list = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    const tutorList = await TutorModel.find({}, "_id")
    res.json(tutorList)
})

exports.tutor_detail = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send(`Not Implemented: tutor Detail: ${req.params.id}`)
})

exports.tutor_create_get = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: tutor Create Get")
})

exports.tutor_create_post = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    console.log(req.body)

    res.send("Not Implemented: tutor Create POST")
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