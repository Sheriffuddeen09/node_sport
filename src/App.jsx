import { Route, Routes } from "react-router-dom"
import LandingPage from "./component/LandingPage"
import Login from "./form/Login"
import Register from "./form/Register"
import Profile from "./profile/Profile"

function App () {


  return (
    <div>
      <Routes>
    <Route path="/register" element={
        
        <Register />
       
      } />

      {/* Add Product */}
      <Route path="/" element={
        
        <LandingPage />
       
      } />

      {/* Add Category */}
      <Route path="/login" element={
        
        <Login />
       
      } />

      {/* Add Homepage */}
      <Route path="/profile" element={
        
        <Profile />
       
      } />

    </Routes>
    </div>
  )
}

export default App