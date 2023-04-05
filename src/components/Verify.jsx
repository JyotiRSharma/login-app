import { useState } from "react";

const Verify = ({ email, counter, setCounter, sendOTP, userOTP }) => {
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState();

  const onClickHandler= () => {
    if (parseInt(otp) === userOTP) {
      setIsOtpValid(true);
    } else {
      setIsOtpValid(false);
    }
  }

  const onResendHandler = () => {
    setIsOtpValid(null);
    sendOTP(email);
    setCounter(10);
    setOtp("");
  }

  return (
    <>
      <div className="grid place-content-center fixed top-0 left-0 w-screen h-screen font-mono">
        <label className="text-lg text-center">Enter your OTP:</label>
        <input
          className="block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2"
          type="email"
          name="user-email"
          id="user-email"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {isOtpValid ? (
          <label>You have entered correct OTP!</label>
      ) : null}
        <div className="flex flex-nowrap">
          <button
            className="text-white bg-sky-500 hover:bg-sky-700 rounded-lg text-center h-10 mt-2 pl-3 pr-3"
            disabled={true ? counter !== 0 : false}
            onClick={onResendHandler}
          >
            Resend OTP {counter > 0 ? "in " + counter : ""}
          </button>
          <button onClick={onClickHandler} className="text-white bg-sky-500 hover:bg-sky-700 rounded-lg text-center h-10 mt-2 ml-5 pl-3 pr-3">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Verify;
