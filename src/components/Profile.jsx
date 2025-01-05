import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const userData = useSelector((store) => store.user);

  const fetchProfile = async () => {
    if (userData) {
      setProfile(userData);
      return;
    }

    try {
      const res = await axios.get(BASE_URL + "/user/profile", {
        withCredentials: true,
      });
      setProfile(res.data.profile);
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen font-source_code_pro text-xl">
        <p>Loading...</p>
      </div>
    );
  }

  function Fields() {
    return (
      <div className="flex flex-col gap-y-2 font-source_code_pro font-semibold text-lg">
        <p>Email:</p>
        <p>Age:</p>
        <p>Gender:</p>
        <p>Bio:</p>
      </div>
    );
  }

  function UserData() {
    return (
      <div className="flex flex-col gap-y-2 font-source_code_pro font-semibold text-lg">
        <p>{profile.email}</p>
        <p>{profile.age}</p>
        <p>{profile.gender}</p>
        <p>{profile.bio || "No bio available"}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-base-100 pt-10">
      <div className="card bg-base-200 shadow-lg rounded-lg border-2 border-primary border-opacity-50 p-6">
        {/* Photo and Name Section */}
        <div className="flex items-center gap-8 mb-6">
          <div className="avatar">
            <div className="w-32 rounded-full border-2 border-primary">
              <img src={profile.photoURL} alt="Profile" />
            </div>
          </div>

          <div className="text-left">
            <h1 className="text-3xl font-bold font-firasans">{profile.name}</h1>
          </div>
        </div>

        {/* User Info Section */}
        <div className="p-4 rounded-lg mb-4">
          <div className="grid grid-cols-2">
            <Fields />
            <UserData />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="grid grid-cols-2 gap-x-2 items-start font-source_code_pro text-sm">
            <div>
              <p>Member since:</p>
              <p>Updated at:</p>
            </div>
            <div>
              <p>{new Date(profile.createdAt).toLocaleDateString()}</p>
              <p>{new Date(profile.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="text-right font-firasans">
            <button className="btn btn-primary rounded-full w-20">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
