import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
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
        onChange={handleEmailChange}
      />
      <Link to="/verify">
      <button
        className="text-white bg-sky-500 hover:bg-sky-700 rounded-lg text-center h-10 mt-4 ml-16 w-24"
      >
        Send OTP
      </button>
      </Link>
    </div>
  );
};

export default LoginPage;
