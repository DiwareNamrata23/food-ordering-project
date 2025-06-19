import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // 🛡️ Accept token from common places: headers or cookies
    const token = req.headers.authorization?.split(" ")[1] || req.headers.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized. No token provided." });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };

    console.log("✅ Auth successful for user:", req.user.id);
    next();
  } catch (error) {
    console.log("❌ Auth error:", error.message);
    return res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authMiddleware;
