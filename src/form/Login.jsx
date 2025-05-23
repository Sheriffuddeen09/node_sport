import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login () {

        const userRef = useRef()
        const [password, setPassword] = useState('')
        const [email, setEmail] = useState('')
        const [errMsg, setErrMsg] = useState(false)
        const [loading, setLoading] = useState(false)
        const [showPassword, setShowPassword] = useState(false);
        const [lineWidth, setLineWidth] = useState(19)
        const navigate = useNavigate()

         useEffect(() =>{
            let timer 
            if (errMsg){
                setLineWidth(19)
                timer = setInterval(() => {
                    setLineWidth((prevWidth) => {
                    if (prevWidth <= 0){
                        clearInterval(timer)
                        setErrMsg(false)
                        return 0
                    }
                    return prevWidth - 6
                })
                }, 500)
            }
            return () => clearInterval(timer)
        },[errMsg])
    
    
        useEffect(() => {
            userRef.current.focus()
    
        }, [])
    
       
       const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(email, password)
        setLoading(true)
        try{
            const response = await Api.post("/login.php",
                JSON.stringify({email, password}),
               { headers:{ 'Content-Type': 'application/json'}, 
               withCredentials: true
            }
           
            )
            
            if(response.data.success){
    
                const user = response.data.user
    
                console.log("Login successful", user);
    
                localStorage.setItem('user_id', user.id)
                localStorage.setItem('user_firstname', user.firstname || "")
                localStorage.setItem('user_lastname', user.lastname || "")
                localStorage.setItem('user_email', user.email || "")
                navigate("/dashboard"); // Redirect to profile page
            } 
            else {
                setErrMsg(response.data.message);
               setTimeout(() => {
                    setErrMsg(false)
                }, 4000);
            }
    
            setEmail('')
            setPassword('')
    
        }
        catch(err){
            if(!err?.response){
                setErrMsg('No server Response')
            }
            else if(err.response?.status === 401){
                setErrMsg('Unauthorised')
            }
            else if(err.response?.status === 400){
                setErrMsg('Missing Username or Password')
            }
            else{
                setErrMsg('Login failed')
            }
            setTimeout(() => {
                setErrMsg(false)
            }, 4000);
        }
        finally{
        setLoading(false)
    
        }
       }

    return (

        <div className="mx- flex flex-col border-2 border-gray-200 justify-start  py-5 mx-auto bg-gray-50 w-96 h-screen">
            <div>
           <div className="flex flex-col justify-center mx-auto">
            <h1 className="font-bold text-lg px-8 text-2xl py-">Signin to your</h1>
            <h1 className="font-bold text-lg px-8 text-2xl py-">Popx Account</h1>
            <p className="text-gray-500 text-sm px-8 py-1">Lorem ipsum dolor sit amet. <br/> consectetur adipiscing elit</p>
            <form onSubmit={handleSubmit} >
            <div className="relative mt-2">
            <label className="text-purple-800 text-[10px] absolute bg-gray-50 -top-2 z-10 left-10">Email Address</label>
            <input type="text" className="w-80 flex my-2 focus:outline-none  mx-auto justify-center items-center text-xs font-bold p-3 
            rounded bg-gray-50 border border-purple-400 shadow-mx"
            ref={userRef}
            required
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address" />
            </div>
            <div className="relative mt-2">
            <label className="text-purple-800 text-[10px] absolute bg-gray-50 -top-2 z-10 left-10">Password</label>
            <input className="w-80 flex my-2 focus:outline-none  mx-auto justify-center items-center text-xs font-bold p-3 
            rounded bg-gray-50 border border-purple-400 shadow-mx relative"
            type={showPassword ? 'text' : 'password'}
            required
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password" />
            </div>
            <button  disabled={!email || !password} className="w-80 flex my- mx-auto 
            justify-center items-center text-white text-xs font-bold p-2 rounded bg-purple-600">
                {loading ? <p className="loading"></p> : "Login"}</button>
            </form>
            <div className={` flex justify-center items-center ${errMsg ? 'block' : 'hidden'}`}>
                <p className="bg-red-600 text-white rounded-lg p-2 fixed top-2 mx-auto w-64  mt-0 mb-2 text-center ">{errMsg}</p>
               <div style={{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:'center',
                width:"100%",
                margin:"auto"
            }}>
                <div className="fixed top-12 translate-x-16 rounded-lg bg-green-400" style={{
                    width: `${lineWidth}%`,
                    height: '4px',
                    transition: 'width 0.5s linear',
                }}></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Login