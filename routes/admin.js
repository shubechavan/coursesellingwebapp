const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin signup
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        await Admin.create({ username, password });
        res.json({ msg: "Admin signup successful" });
    } catch (error) {
        res.status(500).json({ msg: "Error occurred during signup", error: error.message });
    }
});

// Create courses
router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imagelink } = req.body;
    try {
        const course = await Course.create({ title, description, price, imagelink });
        res.json({ msg: "Course created successfully", courseId: course._id });
    } catch (error) {
        res.status(500).json({ msg: "Error creating course", error: error.message });
    }
});

// Fetch all courses
router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json({ courses });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching courses", error: error.message });
    }
});

module.exports = router;
