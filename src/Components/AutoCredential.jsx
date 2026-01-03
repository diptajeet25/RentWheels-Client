import React,{use} from 'react'
import {AuthContext} from '../Context/AuthContext'
import {toast} from 'react-toastify'
import {useLocation,useNavigate} from 'react-router'

const AutoCredential=()=>{
const {loginUser}=use(AuthContext)
const navigate=useNavigate()
const location=useLocation()
const handleAutoLogin=()=>{
loginUser("demouser123@gmail.com","Demouser123@")
.then(()=>{
toast.success("Sign In Successfully")
navigate(location.state?location.state:"/")
})
.catch(err=>toast.error(`${err.message}`))
}
return(
<div className="w-full">
<button onClick={handleAutoLogin} className="btn btn-primary w-full">Auto Fill Credentials</button>
</div>
)
}
export default AutoCredential
