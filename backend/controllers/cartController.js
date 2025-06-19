import userModel from '../models/userModel.js';

// add items to user cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, message: "Invalid user ID" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {}; // fallback to empty object
    const itemId = req.body.itemId;

    if (!itemId) {
      return res.json({ success: false, message: "Item ID not provided" });
    }

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Item added to cart" });

  } catch (error) {
    console.log("addToCart error:", error);
    res.json({ success: false, message: "Server error while adding to cart" });
  }
};


// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.json({ success: false, message: "Invalid user ID" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const itemId = req.body.itemId;
    if (!itemId) {
      return res.json({ success: false, message: "Item ID not provided" });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;

      // Optional: Remove item from cart if quantity hits 0
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Removed from cart" });

  } catch (error) {
    console.log("removeFromCart error:", error);
    res.json({ success: false, message: "Server error while removing from cart" });
  }
};

// fetch user cart items
// Fetch user cart items
const getCart = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ use safe middleware property
    const userData = await userModel.findById(userId);
    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log("Get Cart Error:", error.message); // helpful debug
    res.json({ success: false, message: "Error fetching cart" });
  }
};


export { addToCart, removeFromCart, getCart };