import express from "express";
const router = express.Router()

const user_controller = require("../controllers/userController")
const case_controller = require("../controllers/caseController")
const client_controller = require("../controllers/clientController")
const subject_controller = require("../controllers/subjectController")
const tutor_controller = require("../controllers/tutorController")



//case routes
router.get("/", case_controller.index);
router.get("/case/create", case_controller.case_create_get)
router.post("/case/create", case_controller.case_create_post)
router.get("/case/:id/delete", case_controller.case_delete_get)
router.delete("/case/:id/delete", case_controller.case_delete_post)
router.get("/case/:id/update", case_controller.case_update_get)
router.put("/case/:id/update", case_controller.case_update_post)
router.get("/case/:id", case_controller.case_detail)
router.get("/cases", case_controller.case_list)


//user routes
router.get("/user/create", user_controller.user_create_get)
router.post("/user/create", user_controller.user_create_post)
router.get("/user/:id/delete", user_controller.user_delete_get)
router.delete("/user/:id/delete", user_controller.user_delete_post)
router.get("/user/:id/update", user_controller.user_update_get)
router.put("/user/:id/update", user_controller.user_update_post)
router.get("/users", user_controller.user_list)
router.get("/user/:id", user_controller.user_detail)


//tutor routes
router.post("/tutor/create", tutor_controller.tutor_create_post)
router.get("/tutor/:id/delete", tutor_controller.tutor_delete_get)
router.delete("/tutor/:id/delete", tutor_controller.tutor_delete_post)
router.get("/tutor/:id/update", tutor_controller.tutor_update_get)
router.put("/tutor/:id/update", tutor_controller.tutor_update_post)
router.get("/tutors", tutor_controller.tutor_list)
router.get("/tutor/:id", tutor_controller.tutor_detail)


//subject routes
router.post("/subject/create", subject_controller.subject_create_post)
router.get("/subject/:id/delete", subject_controller.subject_delete_get)
router.delete("/subject/:id/delete", subject_controller.subject_delete_post)
router.get("/subject/:id/update", subject_controller.subject_update_get)
router.put("/subject/:id/update", subject_controller.subject_update_post)
router.get("/subjects", subject_controller.subject_list)
router.get("/subject/:id", subject_controller.subject_detail)


//client routes
router.get("/client/create", client_controller.client_create_get)
router.post("/client/create", client_controller.client_create_post)
router.get("/client/:id/delete", client_controller.client_delete_get)
router.delete("/client/:id/delete", client_controller.client_delete_post)
router.get("/client/:id/update", client_controller.client_update_get)
router.put("/client/:id/update", client_controller.client_update_post)
router.get("/clients", client_controller.client_list)
router.get("/client/:id", client_controller.client_detail)

module.exports = router
