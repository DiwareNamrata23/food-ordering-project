import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized, Login again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: token_decode.id };
    console.log("✅ Token decoded, user ID:", req.user.id);  // 🧪 Log this
    next();
  } catch (error) {
    console.log("Auth error:", error.message);
    res.status(403).json({ success: false, message: "Token invalid or expired" });
  }
};

export default authMiddleware;