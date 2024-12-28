import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";
// import Footer from "./Footer";

export default function Body() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
