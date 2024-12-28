import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/profile", {
          withCredentials: true, // Ensure cookies are sent with the request
        });
        setProfile(res.data.profile);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load profile");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-24">
      <div className="card lg:card-side bg-base-100 shadow-xl p-4">
        <figure className="h-96 w-72">
          <img src={profile.photoURL} alt="Profile Picture" />
        </figure>
        <div className="card-body">
          <h2 className="font-firasans text-3xl font-bold">{profile.name}</h2>

          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col gap-y-2">
              <p className="font-firasans font-medium text-lg">Email:</p>
              <p className="font-firasans font-medium text-lg">Age:</p>
              <p className="font-firasans font-medium text-lg">Gender:</p>
              <p className="font-firasans font-medium text-lg">Bio:</p>
              <p className="font-firasans font-medium text-lg">Member since:</p>
              <p className="font-firasans font-medium text-lg">Updated at:</p>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="font-source_code_pro font-semibold text-lg">
                {profile.email}
              </p>
              <p className="font-source_code_pro font-semibold text-lg">
                {profile.age}
              </p>
              <p className="font-source_code_pro font-semibold text-lg">
                {profile.gender}
              </p>
              <p className="font-source_code_pro font-semibold text-lg">
                {profile.bio || "No bio available"}
              </p>
              <p className="font-source_code_pro font-semibold text-lg">
                {new Date(profile.createdAt).toLocaleDateString()}
              </p>
              <p className="font-source_code_pro font-semibold text-lg">
                {new Date(profile.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <button className="btn btn-accent w-20 rounded-full">Edit</button>
        </div>
      </div>
    </div>
  );
}
