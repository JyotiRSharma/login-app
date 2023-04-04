import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../utils/emailSlice";
import { addItem as otpAddItem } from "../utils/otpSlice";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userOTP, setUserOTP] = useState();
  const [toggleAPI, setToggleAPI] = useState(false);
  const [emailCollision, setEmailCollision] = useState(false);
  const dispatch = useDispatch();
  const prevEmail = useSelector((store) => store.email.items);

  useEffect(() => {
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
    sendOTP(userEmail);
  }, [toggleAPI]);

  useEffect(() => {
    // Check if the email is similar to the previous email.
    if (prevEmail.length > 0 && prevEmail[0] == userEmail) {
      setEmailCollision(true);
    } else {
      setEmailCollision(false);
    }
  }, [userEmail]);

  const onSubmitHandler = () => {
    setToggleAPI(toggleAPI ? false : true);
    dispatch(addItem(userEmail));
    userOTP && dispatch(otpAddItem(userOTP));
  };

  return (
    <div className="grid place-content-center h-48 mt-52 font-mono">
      <label className="text-lg text-center">Enter your email:</label>
      <input
        className="block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2"
        type="email"
        name="user-email"
        id="user-email"
        value={userEmail}
        onChange={e => setUserEmail(e.target.value)}
      />
      {emailCollision ? (
        <label>Previous email matches the current email!</label>
      ) : null}
      <Link to="/verify">
        <button
          className="text-white bg-sky-500 hover:bg-sky-700 rounded-lg text-center h-10 mt-4 ml-16 w-24"
          onClick={onSubmitHandler}
        >
          Send OTP
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
