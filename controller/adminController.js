const asyncHandler = require("express-async-handler")
const Batch = require("../models/Batch")
const Student = require("../models/Student")
const Attendance = require("../models/Attendance")



exports.getBatch = asyncHandler(async (req, res) => {
    const result = await Batch.find()
    res.status(200).json({ message: "Bacth Fetch Success", result })
})
exports.addBatch = asyncHandler(async (req, res) => {
    await Batch.create(req.body)
    res.status(201).json({ message: "Bacth Fetch Success" })
})
exports.updateBatch = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdAndUpdate(batchId, req.body, { runValidators: true })
    res.status(200).json({ message: "Bacth Fetch Success" })
})
exports.deleteBatch = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdAndDelete(batchId)
    res.status(200).json({ message: "Bacth Fetch Success" })
})


// studnet
exports.getStudent = asyncHandler(async (req, res) => {
    const result = await Student.find()
    res.status(200).json({ message: "Bacth Fetch Success", result })
})
exports.getStudentByBatch = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    const result = await Student.find({ batchId })
    res.status(200).json({ message: "GET STudent Fetch by id  Fetch Success", result })
})
exports.addStudent = asyncHandler(async (req, res) => {
    await Student.create(req.body)
    res.status(201).json({ message: "Bacth Fetch Success" })
})
exports.updateStudent = asyncHandler(async (req, res) => {
    const { studentId } = req.params
    await Student.findByIdAndUpdate(studentId, req.body, { runValidators: true })
    res.status(200).json({ message: "Bacth Fetch Success" })
})
exports.deleteStudent = asyncHandler(async (req, res) => {
    const { studentId } = req.params
    await Student.findByIdAndDelete(studentId)
    res.status(200).json({ message: "Bacth Fetch Success" })
})

// attendance
exports.getAttendance = asyncHandler(async (req, res) => {
    const { studId } = req.params
    const result = await Attendance.find({ studId });

    res.status(200).json({ message: "Bacth Fetch Success", result })
})
exports.addAttendance = asyncHandler(async (req, res) => {
    const x = req.body.map(item => {
        return { studId: item.studId, date: item.date, isPresent: item.isPresent }
    })

    const result = await Attendance.findOne({ studId: x[0].studId, date: x[0].date })

    if (result) {
        return res.status(400).json({ message: "Duplicae Attendance" })
    }
    await Attendance.create(x)
    res.status(201).json({ message: "Attendcane add Success" })
})
exports.updateAttendance = asyncHandler(async (req, res) => {
    const { attendanceId } = req.params
    await Attendance.findByIdAndUpdate(attendanceId, req.body, { runValidators: true })
    res.status(200).json({ message: "Bacth Fetch Success" })
})
exports.delteAttendance = asyncHandler(async (req, res) => {
    // const { attendanceId } = req.params
    await Attendance.deleteMany()
    res.status(200).json({ message: "Bacth Fetch Success" })
})

