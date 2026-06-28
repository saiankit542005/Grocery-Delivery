import { Navigate, Outlet } from "react-router-dom"
import Loading from "./Loading";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const{user,loading} =useAuth();

  if(loading) return <Loading/>
  if(!user) return <Navigate to ="/login" replace />
  return (
    <Outlet />
  )
}

export default ProtectedRoute