// import { useState, useEffect } from "react";
import useAuthStore from "../store/useauthStore";

// import profileImage from "../assets/profile_img.webp"
const Profile = () => {
  // const { token,user, refresh } = useAuthStore();
  const {user} = useAuthStore();
  console.log("here is the user", user);
  // const [toast, setToast] = useState(null);
//   const[updatedData, setUpdatedData] = useState()

  // useEffect(() => {
  //   if (toast) {
  //     const timerId = setTimeout(() => {
  //       setToast(null);
  //     }, 3000);

  //     return () => clearTimeout(timerId);
  //   }
  // }, [toast]);
  // const [isEditing, setIsEditing] = useState(false);

  // console.log("user :::", user);
  // const [formData, setFormData] = useState({
  //   userName: user.userName,
  //   profileImage: user.profileImage,
  //   bio: user.bio,
  //   description: user.description,
  //   // skills: user.skills?.join(", ") || [],
  //   gender: user.gender,
  // });

//   const handleSave = async () => {
//     try {
//       const response = await fetch("http://localhost:5001/api/profile/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...formData,
//         //   skills: formData.skills
//         //     .split(",")
//         //     .map((skill) => skill.trim())
//         //     .filter(Boolean),
//         }),
//       });

//       const data = await response.json();
// console.log("data is here", data);
//       if (!response.ok) {
//         throw new Error(data.message || "login failed");
//       }
//       console.log("updated user", data.updatedUser)
//     //   login(data.updatedUser,token);
//     //    login(user,token);
//        refresh({
//         bio: formData.bio,
//         userName:formData.userName
//        });

//       setToast({ message: "Profile updated successfully", type: "success" });
//     } catch (error) {
//       console.log("error", error.message);
//       setToast({message: error.message || "Something went wrong",type: "error"});
//     } finally {
//       setIsEditing(false);
//     }
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card bg-base-100 shadow-xl w-[95vw] min-h-[90vh]">
        <div className="grid grid-cols-2 grid-rows-[35%_65%] h-full">
          <div className="flex items-center justify-center">
            <div className="avatar">
              <div className="w-44 rounded-full">
                <img src={user.profileImage} alt="Profile" />
              </div>
            </div>

            {/* {isEditing && (
              <input
                type="text"
                className="input input-bordered w-72"
                placeholder="Profile Image URL"
                value={formData.profileImage}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    profileImage: e.target.value,
                  })
                }
              />
            )} */}
            
              {/* <input
                type="text"
                className="input input-bordered w-72"
                placeholder="Profile Image URL"
                value={formData.profileImage}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    profileImage: e.target.value,
                  })
                }
              /> */}
            
          </div>

          <div className="p-8 space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                // value={formData.userName}
                // disabled={!isEditing}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     userName: e.target.value,
                //   })
                // }
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                // value={user?.userEmail}
                // disabled
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Gender</span>
              </label>

              <select
                className="select select-bordered w-full"
                // value={formData.gender || ""}
                // disabled={!isEditing}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     gender: e.target.value,
                //   })
                // }
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="prefer not say">Prefer not say</option>
              </select>
            </div>
          </div>

          <div className="col-span-2 p-8 overflow-y-auto">
            <div className="mb-6">
              <label className="label">
                <span className="label-text font-semibold">Bio</span>
              </label>

              <textarea
                className="textarea textarea-bordered w-full h-20"
                // value={formData.bio}
                // disabled={!isEditing}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     bio: e.target.value,
                //   })
                // }
              />
            </div>

            <div className="mb-6">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>

              <textarea
                className="textarea textarea-bordered w-full h-30"
                // value={formData.description}
                // disabled={!isEditing}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     description: e.target.value,
                //   })
                // }
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Skills</span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full"
                // value={formData.skills}
                // disabled={!isEditing}
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     skills: e.target.value,
                //   })
                // }
              />
            </div>

            <div className="card-actions justify-end mt-6">
              {/* {isEditing ? (
                <button className="btn btn-success" onClick={handleSave}>
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )} */}
              <button className="btn btn-primary">Edit </button>
            </div>
          </div>
        </div>
      </div>

      
      {/* {toast && (
  <div className="toast toast-top toast-end">
    <div
      className={`alert ${
        toast.type === "success" ? "alert-success" : "alert-error"
      }`}
    >
      <span>{toast.message}</span>
    </div>
  </div>
)} */}
    </div>
  );
};

export default Profile;
