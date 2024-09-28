const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = express.Router();

// User signup
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        await User.create({ username, password });
        res.json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error occurred during signup", error: error.message });
    }
});

// Fetch all courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json({ courses });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching courses", error: error.message });
    }
});

// Purchase course
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        await User.updateOne(
            { username },
            { "$push": { purchasedCourses: courseId } }
        );
        res.json({ message: "Purchase complete!" });
    } catch (error) {
        res.status(500).json({ msg: "Error purchasing course", error: error.message });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.headers.username
        });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        console.log(user.purchasedCourses);

        // Fetch the courses using the purchasedCourses array
        const courses = await Course.find({
            _id: { $in: user.purchasedCourses }
        });

        res.json({ courses });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching purchased courses", error: error.message });
    }
});

module.exports = router;
