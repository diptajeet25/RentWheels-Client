import React,{useContext} from "react"
import {AuthContext} from "../Context/AuthContext"
import {updateProfile} from "firebase/auth"
import {auth} from "../Firebase/Firebase.init"
import {toast} from "react-toastify"
import {useNavigate} from "react-router"
import {useForm} from "react-hook-form"
import AutoCredential from "./AutoCredential"

const RegisterForm=()=>{
const {createUser,googleSignIn}=useContext(AuthContext)
const navigate=useNavigate()
const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm()
const onSubmit=data=>{
createUser(data.email,data.password).then(()=>{
updateProfile(auth.currentUser,{displayName:data.name,photoURL:data.photo})
toast.success("Sign Up Successfully")
navigate("/")
}).catch(err=>toast.error(err.message))
}
const googleLogIn=()=>{
googleSignIn().then(()=>{
toast.success("Sign In With Google Successfully")
navigate("/")
}).catch(err=>toast.error(err.message))
}
return(
<div className="w-[95%] lg:w-[40%] mx-auto my-12 p-8 bg-base-100 text-base-content border rounded-2xl shadow-xl">
<h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
<div>
<label className="font-semibold">Full Name</label>
<input type="text" placeholder="Enter your full name" className="input input-bordered w-full" {...register("name",{required:"Name is required"})}/>
{errors.name&&<p className="text-error mt-1">{errors.name.message}</p>}
</div>
<div>
<label className="font-semibold">Email Address</label>
<input type="email" placeholder="Enter your email address" className="input input-bordered w-full" {...register("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/i,message:"Invalid email address"}})}/>
{errors.email&&<p className="text-error mt-1">{errors.email.message}</p>}
</div>
<div>
<label className="font-semibold">Password</label>
<input type="password" placeholder="At least 6 chars, 1 uppercase & 1 lowercase" className="input input-bordered w-full" {...register("password",{required:"Password is required",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,message:"Must include uppercase, lowercase & 6 characters"}})}/>
{errors.password&&<p className="text-error mt-1">{errors.password.message}</p>}
</div>
<div>
<label className="font-semibold">Photo URL</label>
<input type="url" placeholder="https://example.com/photo.jpg" className="input input-bordered w-full" {...register("photo",{required:"Photo URL is required"})}/>
{errors.photo&&<p className="text-error mt-1">{errors.photo.message}</p>}
</div>
<button disabled={isSubmitting} className="btn btn-primary w-full text-lg mt-4">
{isSubmitting?"Creating Account...":"Register"}
</button>
</form>
<button onClick={googleLogIn} className="btn btn-outline w-full my-4">
Login with Google
</button>
<div className="w-full flex justify-center my-2">
<AutoCredential/>
</div>
<p className="text-center mt-4 text-base-content/70">
Already have an account?{" "}
<a href="/auth" className="text-primary font-semibold hover:underline">
Login
</a>
</p>
</div>
)
}
export default RegisterForm
