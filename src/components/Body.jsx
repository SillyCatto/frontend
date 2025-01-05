import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useEffect } from "react";
// import Footer from "./Footer";

export default function Body() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;

    try {
      const res = await axios.get(BASE_URL + "/user/profile", {
        withCredentials: true,
      });
      dispatch(addUser(res.data.profile));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
