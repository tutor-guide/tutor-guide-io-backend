import { NextFunction, Request, Response } from "express"

const Subject = require("../models/subject")
const asyncHandler = require('express-async-handler')

exports.subject_list = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: subject List")
})

exports.subject_detail = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send(`Not Implemented: subject Detail: ${req.params.id}`)
})

exports.subject_create_get = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: subject Create Get")
})

exports.subject_create_post = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: subject Create POST")
})

exports.subject_delete_get = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: subject delete GET")
})

exports.subject_delete_post = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: subject delete POST")
})

exports.subject_update_get = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: subject Update GET")
})

exports.subject_update_post = asyncHandler(async (req: Request, res: Response, next: NextFunction)=>{
    res.send("Not Implemented: subject Update POST")
})