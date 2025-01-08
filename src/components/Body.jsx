import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useEffect } from "react";
// import Footer from "./Footer";

export default function Body() {
  const profile = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProfile = async () => {
    if (!profile) {
      try {
        const res = await axios.get(BASE_URL + "/user/profile", {
          withCredentials: true,
        });
        dispatch(addUser(res.data.profile));
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login");
        } else {
          navigate("/error");
        }
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
