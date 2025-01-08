import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const feedData = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (!feedData) {
      try {
        const response = await axios.get(BASE_URL + "/user/feed", {
          withCredentials: true,
        });
        dispatch(addFeed(response.data?.data));
      } catch (err) {
        navigate("/error");
        console.error(err);
      }
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
};

export default Feed;
