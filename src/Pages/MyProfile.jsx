import React,{useContext,useState} from "react"
import {AuthContext} from "../Context/AuthContext"
import {updateProfile} from "firebase/auth"
import {auth} from "../Firebase/Firebase.init"
import {toast} from "react-toastify"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const MyProfile=()=>{
const {user}=useContext(AuthContext)
const [isEditing,setIsEditing]=useState(false)
const [name,setName]=useState(user?.displayName||"")
const [photo,setPhoto]=useState(user?.photoURL||"")
const [loading,setLoading]=useState(false)

const handleUpdate=async e=>{
e.preventDefault()
setLoading(true)
try{
await updateProfile(auth.currentUser,{
displayName:name,
photoURL:photo
})
toast.success("Profile updated successfully")
setIsEditing(false)
}catch{
toast.error("Failed to update profile")
}finally{
setLoading(false)
}
}

return(
<>
<Navbar/>

<div className="min-h-[80vh] py-10 px-4 text-base-content">
<div className="max-w-3xl mx-auto">

<div className="mb-8">
<h1 className="text-2xl md:text-3xl font-semibold">
My Profile
</h1>
<p className="text-sm text-base-content/60 mt-1">
View and manage your personal information
</p>
</div>

<div className="bg-base-100 rounded-2xl shadow-sm p-6 md:p-8">

<div className="flex flex-col sm:flex-row sm:items-center gap-6 border-b border-base-300 pb-6 mb-6">
<img
src={user?.photoURL||"https://i.ibb.co/4pDNDk1/avatar.png"}
alt="Profile"
className="w-24 h-24 rounded-full object-cover border border-base-300"
/>

<div>
<h2 className="text-xl font-semibold">
{user?.displayName||"User"}
</h2>
<p className="text-sm text-base-content/60">
{user?.email}
</p>
</div>
</div>

{!isEditing?(
<div className="space-y-6">
<div>
<p className="text-sm text-base-content/60">Full Name</p>
<p className="font-medium">
{user?.displayName||"N/A"}
</p>
</div>

<div>
<p className="text-sm text-base-content/60">Email Address</p>
<p className="font-medium">{user?.email}</p>
</div>

<button
onClick={()=>setIsEditing(true)}
className="btn btn-primary w-fit"
>
Edit Profile
</button>
</div>
):(
<form onSubmit={handleUpdate} className="space-y-5">

<div>
<label className="block text-sm text-base-content/60 mb-1">
Full Name
</label>
<input
type="text"
value={name}
onChange={e=>setName(e.target.value)}
className="input input-bordered w-full"
required
/>
</div>

<div>
<label className="block text-sm text-base-content/60 mb-1">
Photo URL
</label>
<input
type="url"
value={photo}
onChange={e=>setPhoto(e.target.value)}
placeholder="https://example.com/photo.jpg"
className="input input-bordered w-full"
/>
</div>

<div className="flex gap-4 pt-4">
<button
type="submit"
disabled={loading}
className="btn btn-primary"
>
{loading?"Updating...":"Save Changes"}
</button>

<button
type="button"
onClick={()=>setIsEditing(false)}
className="btn btn-outline"
>
Cancel
</button>
</div>

</form>
)}

</div>
</div>
</div>

<Footer/>
</>
)
}

export default MyProfile
