import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUser } from "./utils/userSlice.js";

export default function NavBar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/logout");
      dispatch(removeUser());
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="navbar bg-base-300 fixed shadow-md shadow-gray-400 z-[1000]">
      <div className="flex-1">
        <p className="font-firasans text-2xl font-bold p-2">DevBuddy 🧑‍💻</p>
      </div>

      <div className="flex-none gap-2">
        {/* show pfp only when user is logged in*/}
        {user && (
          <div className="flex flex-row items-center ">
            <div className="font-source_code_pro font-semibold">
              <p>Welcome, {user.name}!</p>
            </div>
            <div className="dropdown dropdown-end mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Profile picture" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
