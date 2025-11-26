import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const RegisterForm = () => {
  const {createUser,googleSignIn}=useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;


      const name= form.name.value
   const email = form.email.value
    const password= form.password.value
     const photo= form.photo.value
     console.log(name,email,password,photo);
     createUser(email,password)
     .then(res=>
      {
        console.log(res.user)
       
        updateProfile(auth.currentUser,{
          displayName:name,
          photoURL:photo
        })
        .then(result=>console.log("Update Successfully",result))
        .catch(error=>console.log(error))


  })
     .catch(err=>console.log(err))
    


  };

    const googleLogIn=()=>
  {
    googleSignIn()
    .then(res=>
    {
      console.log(res)
      alert("Sign In With Google Successfull")
    }
    )
    .catch(err=>console.log(err))
  }

  return (
    <div className="w-[95%] lg:w-[40%] mx-auto my-12 p-8 bg-white border rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>

      <form onSubmit={handleRegister} className="space-y-5">

        <div>
          <label className="font-semibold text-black">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Choose a password"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">Photo URL</label>
          <input
            type="url"
            name="photo"
            placeholder="Paste profile photo URL"
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full text-lg mt-4">
          Register
        </button>
      </form>
      <button onClick={googleLogIn} className="btn bg-gray-100 border-1-black text-black w-full my-4 mb-3 border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <a href="/auth" className="text-blue-600 font-semibold hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterForm;
