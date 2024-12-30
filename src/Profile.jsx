import { useEffect, useState } from "react";
import axios from "axios";

// export default function Profile() {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState("");
//
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/user/profile", {
//           withCredentials: true, // Ensure cookies are sent with the request
//         });
//         setProfile(res.data.profile);
//       } catch (err) {
//         setError(err.response?.data?.error || "Failed to load profile");
//       }
//     };
//
//     fetchProfile();
//   }, []);
//
//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }
//
//   if (!profile) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }
//
//   function Fields() {
//     return (
//       <div className="flex flex-col gap-y-2">
//         <p className="font-firasans font-medium text-lg">Email:</p>
//         <p className="font-firasans font-medium text-lg">Age:</p>
//         <p className="font-firasans font-medium text-lg">Gender:</p>
//         <p className="font-firasans font-medium text-lg">Bio:</p>
//         <p className="font-firasans font-medium text-lg">Member since:</p>
//         <p className="font-firasans font-medium text-lg">Updated at:</p>
//       </div>
//     );
//   }
//
//   function UserData() {
//     return (
//       <div className="flex flex-col gap-y-2">
//         <p className="font-source_code_pro font-semibold text-lg">
//           {profile.email}
//         </p>
//         <p className="font-source_code_pro font-semibold text-lg">
//           {profile.age}
//         </p>
//         <p className="font-source_code_pro font-semibold text-lg">
//           {profile.gender}
//         </p>
//         <p className="font-source_code_pro font-semibold text-lg">
//           {profile.bio || "No bio available"}
//         </p>
//         <p className="font-source_code_pro font-semibold text-lg">
//           {new Date(profile.createdAt).toLocaleDateString()}
//         </p>
//         <p className="font-source_code_pro font-semibold text-lg">
//           {new Date(profile.updatedAt).toLocaleDateString()}
//         </p>
//       </div>
//     );
//   }
//
//   function UserInfoBlock() {
//     return (
//       <div className="flex lg:flex-row">
//         <div className="flex flex-col items-center ">
//           <Fields />
//         </div>
//
//         <div className="divider divider-horizontal"></div>
//
//         <div className="flex flex-col items-center ">
//           <UserData />
//         </div>
//       </div>
//     );
//   }
//
//   function Photo() {
//     return (
//       <div className="avatar online">
//         <div className="w-24 rounded-full">
//           <img src={profile.photoURL} alt="Profile Picture" />
//         </div>
//       </div>
//     );
//   }
//
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex flex-col border-opacity-50 items-start">
//         {/*-------------------pfp block-----------------*/}
//         <div className="card bg-base-300 rounded-box grid h-20">
//           <div className="flex w-full">
//             <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
//               <Photo />
//             </div>
//             <div className="divider"></div>
//
//             <div className="card font-firasans text-3xl font-semibold bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
//               {profile.name}
//             </div>
//           </div>
//         </div>
//         {/*------------------------------------*/}
//
//         <div className="divider"></div>
//
//         {/*------------User Info------------*/}
//         <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
//           <UserInfoBlock />
//         </div>
//         {/*------------------------------------*/}
//         <div className="">
//           <button className="btn btn-primary w-20 rounded-full">Edit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/profile", {
          withCredentials: true,
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
