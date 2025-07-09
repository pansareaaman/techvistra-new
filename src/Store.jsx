import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice"; // Ensure correct path

const store = configureStore({
  reducer: {
    user: userReducer, // Ensure 'userReducer' is included here
  },
});

export default store; // ✅ Default export
