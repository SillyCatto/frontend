import { useState } from "react";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants.js";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.user));
      navigate("/user/feed");
    } catch (err) {
      console.error(err);
    }
  };

  function Logo() {
    return (
      <div className="flex flex-col justify-center h-screen gap-4 cursor-default">
        <p className="font-firasans font-bold text-4xl">DevBuddy 🧑‍💻</p>
        <p className="font-firasans text-2xl font-semibold">
          A place to connect for all Developers 🔥
        </p>
        <div className="flex flex-row gap-5 my-4 font-source_code_pro font-medium text-xl">
          <Typewriter
            words={["Find", "Connect", "Make friends", "Develop </>"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>
    );
  }

  function LoginForm({ onLogin }) {
    const [email, setEmail] = useState("cat@gmail.com");
    const [password, setPassword] = useState("Cat@123");
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="card glass bg-base-100 w-96 shadow-xl">
          <div className="card-body items-center">
            <div className="flex items-center flex-col gap-3 m-3">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow font-source_code_pro"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow font-source_code_pro"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </label>
            </div>

            <div className="card-actions justify-center">
              <button
                className="btn btn-primary rounded-full w-32 font-bold font-firasans"
                onClick={() => onLogin(email, password)}
              >
                Login
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-source_code_pro text-sm mt-5">
                Dont have an account?
              </p>
              <p className="font-source_code_pro text-sm underline cursor-pointer">
                Signup
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full h-1/2 lg:h-full">
        <Logo />
      </div>

      <div className="hidden divider"></div>

      <div className="flex justify-center items-center lg:w-1/2 w-full h-1/2 lg:h-full">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}
