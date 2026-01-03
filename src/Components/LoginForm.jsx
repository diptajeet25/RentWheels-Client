import React, { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import AutoCredential from "./AutoCredential"

const LoginForm = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        toast.success("Sign In Successfully")
        navigate(location.state ? location.state : "/")
      })
      .catch(err => toast.error(err.message))
  }

  const googleLogIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Sign In With Google Successfully")
        navigate(location.state ? location.state : "/")
      })
      .catch(err => toast.error(err.message))
  }

  return (
    <div className="w-[95%] lg:w-[40%] mx-auto my-12 p-8 bg-white border rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        <div>
          <label className="font-semibold text-black">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="font-semibold text-black">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            {...register("password", {
              required: "Password is required"
            })}
          />
          {errors.password && <p className="text-red-600 mt-1">{errors.password.message}</p>}
        </div>

        <button disabled={isSubmitting} className="btn btn-primary w-full text-lg mt-4">
          {isSubmitting ? "Signing In..." : "Login"}
        </button>
      </form>

      <button
        type="button"
        onClick={googleLogIn}
        className="btn bg-gray-100 text-black w-full my-4 border border-gray-200"
      >
        Login with Google
      </button>

      <div className="w-full flex justify-center my-2">
        <AutoCredential />
      </div>

      <p className="text-center mt-4 text-gray-600">
        Don't have an account?{" "}
        <a href="/auth/reg" className="text-blue-600 font-semibold hover:underline">
          Register
        </a>
      </p>
    </div>
  )
}

export default LoginForm
