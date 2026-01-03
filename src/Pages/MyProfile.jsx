import React, { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { updateProfile } from "firebase/auth"
import { auth } from "../Firebase/Firebase.init"
import { toast } from "react-toastify"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const MyProfile = () => {
  const { user } = useContext(AuthContext)
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.displayName || "")
  const [photo, setPhoto] = useState(user?.photoURL || "")
  const [loading, setLoading] = useState(false)

  const handleUpdate = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })
      toast.success("Profile updated successfully")
      setIsEditing(false)
    } catch {
      toast.error("Failed to update profile")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] text-black  py-10 px-4">
        <div className="max-w-3xl mx-auto">

      
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold ">
              My Profile
            </h1>
            <p className="text-sm mt-1">
              View and manage your personal information
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white  rounded-2xl shadow-sm p-6 md:p-8">

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 border-b  pb-6 mb-6">
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border border-gray-300 dark:border-gray-600"
              />

              <div>
                <h2 className="text-xl font-semibold ">
                  {user?.displayName || "User"}
                </h2>
                <p className="text-sm ">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* View Mode */}
            {!isEditing ? (
              <div className="space-y-6">
                <div>
                  <p className="text-sm ">
                    Full Name
                  </p>
                  <p className="font-medium ">
                    {user?.displayName || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-sm ">
                    Email Address
                  </p>
                  <p className="font-medium ">
                    {user?.email}
                  </p>
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex btn btn-primary items-center px-6 py-2.5 rounded-lg border  text-sm font-medium  transition"
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              /* Edit Mode */
              <form onSubmit={handleUpdate} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {loading ? "Updating..." : "Save Changes"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MyProfile
