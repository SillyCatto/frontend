import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToFeed = () => {
    navigate("/user/feed");
  };

  const redirectToProfile = () => {
    navigate("/user/profile");
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/logout");
      dispatch(removeUser());

      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  function WelcomeUser() {
    return (
      user && (
        <div className="font-source_code_pro font-semibold">
          <p>Welcome, {user.name}!</p>
        </div>
      )
    );
  }

  function ProfileWithDropdown() {
    return (
      user && (
        <div className="flex flex-row items-center ">
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
                <a onClick={redirectToProfile}>Profile</a>
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
      )
    );
  }

  return (
    <div className="navbar bg-base-100 fixed shadow-lg z-[1000] p-0">
      <div className="flex-1 pl-2">
        <p
          className="font-firasans text-xl font-bold p-2 cursor-pointer"
          onClick={redirectToFeed}
        >
          DevBuddy 🧑‍💻
        </p>
      </div>
      <WelcomeUser />
      <ProfileWithDropdown />
    </div>
  );
}
