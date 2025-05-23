import { Link } from "react-router-dom"

function LandingPage () {

    return (

            <div className="mx- flex flex-col border-2 border-gray-200 justify-end  py-5 mx-auto bg-gray-50 w-96 h-screen">
            <div>
           <div className="flex flex-col justify-center mx-auto">
            <h1 className="font-bold text-lg px-8 py-">Welcome to Propx</h1>
            <p className="text-gray-500 text-sm px-8 py-1">Lorem ipsum dolor sit amet. <br/> consectetur adipiscing elit</p>
            <Link to={'/register'}>
            <button className="w-80 flex my-2 mx-auto justify-center items-center text-white text-xs font-bold p-2 rounded bg-purple-700">Create Account</button>
            </Link>
            <Link to={'/login'}>
            <button className="w-80 flex my- mx-auto justify-center items-center text-black text-xs font-bold p-2 rounded bg-purple-300">Already Registered?Login</button>
            </Link>
            </div>
        </div>
        </div>
    )
}

export default LandingPage