const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // Extract token from Authorization header
        const token = req.header("Authorization")?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Access Denied: No Token Provided" });
        }

        // Verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach user payload to request

        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
