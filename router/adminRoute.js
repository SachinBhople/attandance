const { getBatch, addBatch, updateBatch, deleteBatch, getAttendance, addAttendance, updateAttendance, delteAttendance, getStudent, addStudent, updateStudent, deleteStudent, getStudentByBatch } = require("../controller/adminController")

const router = require("express").Router()

router
    .get("/batch", getBatch)
    .post("/batch-add", addBatch)
    .put("/batch-update/:batchId", updateBatch)
    .delete("/batch-delete/:batchId", deleteBatch)


    .get("/student", getStudent)
    .get("/student-by-batch/:batchId", getStudentByBatch)
    .post("/student-add", addStudent)
    .put("/student-update/:studentId", updateStudent)
    .delete("/student-delete/:studentId", deleteStudent)





    .get("/attendance/:studId", getAttendance)
    .post("/attendance-add", addAttendance)
    .put("/attendance-update/:attendanceId", updateAttendance)
    .delete("/attendance-delete", delteAttendance)


module.exports = router