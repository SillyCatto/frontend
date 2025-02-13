import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import { Provider } from "react-redux";
import { appStore } from "./utils/store.js";
import Feed from "./components/Feed.jsx";
import Error from "./components/Error.jsx";
import Signup from "./components/Signup.jsx";

export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/user" element={<Body />}>
              <Route path="profile" element={<Profile />} />
              <Route path="feed" element={<Feed />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
