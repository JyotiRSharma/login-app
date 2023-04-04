import { configureStore } from "@reduxjs/toolkit"
import emailSlice from "./emailSlice";
import otpSlice from "./otpSlice";

const store = configureStore({
  reducer: {
    email: emailSlice,
    otp: otpSlice,
  }
});

export default store;