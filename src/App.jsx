import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import { Provider } from "react-redux";
import { appStore } from "./utils/store.js";
import Feed from "./components/Feed.jsx";
import ErrorPage from "./components/errorPage.jsx";

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
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
