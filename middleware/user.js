const { User } = require("../db");
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({ username, password })
        .then(value => {
            if (value) {
                next();
            } else {
                res.status(403).json({ msg: "User doesn't exist" });
            }
        })
        .catch(err => res.status(500).json({ msg: "Error occurred", error: err.message }));
}

module.exports = userMiddleware;
