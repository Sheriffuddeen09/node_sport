import { useEffect, useState } from "react";
import logo from './download.png'
function Profile (){

    const [user, setUser] = useState({
        id: "",
        firstname: "",
        email: "",
        lastname: "",
        profile_image: "",
        phone:''
    })
    const fetchUser = async () =>{
        const userId = localStorage.getItem('user_id')
        if (!userId) {
            console.error("No user_id found in localStorage.");
            return;
        }
        try{
        const response = await Api.get(`/get_user.php?user_id=${userId}`,{
        headers:{"Content-Type": "application/json"},
        withCredentials: true
        })
        if (response.data.success && response.data.user) {
          
           setUser(response.data.user)
        } else {
            console.error("Error: Invalid user data structure.", response.data);
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}


    useEffect( () =>{
        fetchUser()

    },[])

    return(
        <div className="mx- flex flex-col border-2 border-gray-200 justify-start mx-auto bg-gray-50 widt h-screen">
            <div>
           <div className="flex flex-col justify-center mx-auto">
            <h1 className="font-bold px-8 py bg-white text-gray-500 py-3">Account Settings</h1>
            <div className="px-5 py-3 inline-flex gap-3">
                <img src={logo} alt="logo" className="w-20 h-20" />
                <div className="font-semibold text-sm">
                    <p className="text-black">Marry Doe</p>
                    <p>Marry@Gmail.com</p>
                </div>
            </div>
            <p className=" font-semibold text-xs px-8 py-1">Lorem ipsum Dolor Sit amet.
            consectetur Sadipiscing elit, sed diam nonumy eirmod tempor inviduntut labore et dolore
            magna aliquyan erat, sed diam.
            
            </p>
            </div>
        </div>
        </div>
    )
}

export default Profile