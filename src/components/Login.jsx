import { useEffect, useState } from "react";
import CustomDialog from "./dialog/dialog";
import useDialog from "./dialog/useDialog";
import Verify from "./Verify";

const LoginPage = () => {
  const TIMER_SECONDS = 30;
  const [userEmail, setUserEmail] = useState("");
  const [prevUserEmail, setPrevUserEmail] = useState();
  const [userOTP, setUserOTP] = useState();
  const [toggleAPI, setToggleAPI] = useState(false);
  const [emailCollision, setEmailCollision] = useState(false);
  const [counter, setCounter] = useState(TIMER_SECONDS);
  const { isShowing: showOtpPreview, toggle: toggleOptPreview } = useDialog();
  const [isCounterActive, setIsCounterActive] = useState(false);

  useEffect(() => {
    if (showOtpPreview) {
      sendOTP(userEmail);
    }
  }, [toggleAPI]);

  useEffect(() => {
    // Check if the email is similar to the previous email.
    if (prevUserEmail == userEmail) {
      setEmailCollision(true);
    } else {
      setEmailCollision(false);
    }
  }, [userEmail, toggleOptPreview]);

  useEffect(() => {
    let timer = null;
    if (isCounterActive && counter > 0) {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    }
    return () => {
      return clearInterval(timer);
    };
  }, [isCounterActive, toggleAPI, counter]);

  // Make a dummy API call to send an OTP to the email.
  const sendOTP = async (emailId) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        email: emailId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await data.json();
    // setUserOTP(response.data.otp)
    setUserOTP(1234);
  };

  const onSubmitHandler = () => {
    if (userEmail.length == 0 || (emailCollision && counter !== 0)) {
      return;
    }
    setCounter(TIMER_SECONDS);
    setPrevUserEmail(userEmail);
    setIsCounterActive(true);
    setToggleAPI(toggleAPI ? false : true);
    toggleOptPreview();
  };

  return (
    <div className="grid place-content-center fixed top-0 left-0 w-screen h-screen font-mono">
      <label className="text-lg text-center">Enter your email:</label>
      <input
        className="block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2"
        type="email"
        name="user-email"
        id="user-email"
        autoComplete="off"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      {emailCollision && counter !== 0 ? (
        <div>
          <label>Previous email matches the current email!</label>
          <br></br>
          <label>Please try after {counter} seconds...</label>
        </div>
      ) : null}

      <button
        className="text-white bg-sky-500 hover:bg-sky-700 rounded-lg text-center h-10 mt-2"
        onClick={onSubmitHandler}
      >
        Send OTP
      </button>

      <CustomDialog
        direction="center"
        isShowing={showOtpPreview}
        hide={toggleOptPreview}
      >
        <Verify
          email={userEmail}
          counter={counter}
          setCounter={setCounter}
          sendOTP={sendOTP}
          userOTP={userOTP}
        />
      </CustomDialog>
    </div>
  );
};

export default LoginPage;
