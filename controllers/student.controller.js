const student = require("../models/student");

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const allStudents = await student.findAll();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single student
const getSingleStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const singleStudent = await student.findByPk(id);
    // Handle case where student is not found
    if (!singleStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(singleStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create student
const createStudent = async (req, res) => {
  try {
    const newStudent = await student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update student
const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const studentToUpdate = await student.findByPk(id);
    // Handle case where student is not found
    if (!studentToUpdate) {
      return res.status(404).json({ error: "Student not found" });
    }
    await studentToUpdate.update(req.body);
    res.status(200).json({
      message: "Student updated successfully",
      studentToUpdate,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await student.findByPk(id);
    // Handle case where student is not found
    if (!deleteStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    await deleteStudent.destroy();
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
