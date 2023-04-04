import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Verify = () => {
  const email = useSelector(store => store.email.items);
  const otp = useSelector(store => store.otp.items);

  return (
    <>
    <label>Verify page works! {[email[0], otp[0]]}</label>
    </>
  )
}

export default Verify;