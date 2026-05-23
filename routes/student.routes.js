const experess = require("express");
const router = experess.Router();
const studentController = require("../controllers/student.controller");

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getSingleStudent);
router.post("/", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
