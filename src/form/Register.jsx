import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register () {

    const userRef = useRef()
    const [formData, setFormData] = useState({
        firstname: "",
        company: "",
        email: "",
        password: "",
        phone:'',
      });
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isAgency, setIsAgency] = useState(null)
    const [success, setSuccess] = useState(false)
    const [lineWidth, setLineWidth] = useState(28)

    useEffect(() =>{
        let timer 
        if (errMsg){
            setLineWidth(20)
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


    const navigate = useNavigate()

    useEffect(() => {
        userRef.current.focus()

    }, [])

    

    useEffect(() => {
        if (success) {
            console.log("Navigating to login...");
        }
    }, [success, navigate]);
    


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log(formData.email, formData.password, formData.firstname, formData.company, formData.phone);
        setLoading(true);
    
        const formDataToSend = new FormData();
        formDataToSend.append("firstname", formData.firstname);
        formDataToSend.append("company", formData.company);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("password", formData.password);
        formDataToSend.append("phone", formData.phone);
        
        if (image) {
            formDataToSend.append("profile_image", image);
        }
    
        try {
            const response = await Api.post("", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        
            console.log("API Response:", response?.data); // Debugging API response
            setSuccess(true);
        
            if (response.data.success) {
                setMessage(response.data.message);
                setErrMsg({});
        
                setTimeout(() => {
                    setErrMsg({})
                }, 4000);

                setFormData({
                    email: '',
                    firstname: '',
                    company: '',
                    password: '',
                    phone: '',
                    profile_image: null
                });
        
            } else {
                console.log("Registration message:", response.data.message);
                setErrMsg("Registration failed");
            }
        }          
        catch (err) {
            console.error("Error Response:", err.response);
    
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
        }finally {
            setLoading(false);
        }
    };
    
    return (

        <div className="mx- flex flex-col border-2 border-gray-200 justify-start  py-5 mx-auto bg-gray-50 w-96 h-screen">
        <form onSubmit={handleSubmit} >
           <div className="flex flex-col justify-center mx-auto">
            <h1 className="font-bold text-lg px-8 text-2xl py-">Create to your</h1>
            <h1 className="font-bold text-lg px-8 text-2xl py-">Popx Account</h1>
            <div className="relative mt-2">
            <label className="text-purple-800 font-semibold text-[10px] absolute inline-flex items-center bg-gray-50 top-0 z-10 left-10">Full Name <span className="text-red-800">*</span></label>
            <input type="text" className="w-80 flex my-2 focus:outline-none mx-auto justify-center items-center text-black text-xs font-bold p-2 
            rounded bg-gray-50 border border-purple-400 text-black shadow-mx"
            placeholder="Marry Doe" 
            required
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            ref={userRef}/>
            </div>
            <div className="relative mt-2">
            <label className="text-purple-800 font-semibold text-[10px] absolute inline-flex items-center bg-gray-50 top-0 z-10 left-10">Phone Number <span className="text-red-800">*</span></label>
            <input type="text" className="w-80 flex my-2 focus:outline-none mx-auto justify-center items-center text-black text-xs font-bold p-2 
            rounded bg-gray-50 border border-purple-400 shadow-mx relative"
            placeholder="+234" 
            required
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="on"
            />
            </div>
            <div className="relative mt-2">
            <label className="text-purple-800 font-semibold text-[10px] absolute inline-flex items-center bg-gray-50 top-0 z-10 left-10">Email address <span className="text-red-800">*</span></label>
            <input className="w-80 flex my-2 focus:outline-none mx-auto justify-center items-center text-black text-xs font-bold p-2 
            rounded bg-gray-50 border border-purple-400 shadow-mx relative"
            placeholder="Enter password"
            type="email"
            required
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            </div>
            <div className="relative mt-2">
            <label className="text-purple-800 font-semibold text-[10px] inline-flex items-center absolute bg-gray-50 top-0 z-10 left-10">Password <span className="text-red-800">*</span></label>
            <input className="w-80 flex my-2 focus:outline-none mx-auto justify-center items-center text-black text-xs font-bold p-2 
            rounded bg-gray-50 border border-purple-400 shadow-mx relative"
            placeholder="Enter password" 
            type='password'
            required
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            </div>
            <div className="relative mt-2">
            <label className="text-purple-800 font-semibold text-[10px] absolute inline-flex items-center bg-gray-50 top-0 z-10 left-10">Company name <span className="text-red-800">*</span></label>
            <input type="text" className="w-80 flex my-2 focus:outline-none mx-auto justify-center items-center text-black text-xs font-bold p-2 
            rounded bg-gray-50 border border-purple-400 shadow-mx relative"
            placeholder="" 
            required
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="on"
            />
            </div>
            <div className="flex flex-col mt-2 px-7 mb-4">
            <label className="text-black font-semibold text-[11px]">Are you an Agency?<span className="text-red-800">*</span></label>
            <div className="inline-flex gap-5">
            <div className="inline-flex gap-2">
             <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
              />
            <label className="text-xs font-semibold">Yes</label>
            </div>
            <div className="inline-flex gap-2">
             <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
              />
            <label className="text-xs font-semibold">No</label>
            </div>
            </div>
            </div>
             <div className="fixed bottom-4 left-0 right-0 flex justify-center">
                <Link to={'/profile'}>
          <button  disabled={!formData.email || !formData.password 
          || !formData.firstname || !formData.company || !formData.phone} 
          className="w-80 bg-purple-700 text-white text-xs font-bold p-2 rounded shadow">
            {loading ? <p className="loading"></p> : "Register"}
          </button>
          </Link>
        </div>
        </div>
        </form>
        <div className={` flex justify-center items-center ${errMsg ? 'block' : 'hidden'}`}>
                <p className="bg-red-600 text-white rounded-tr-lg rounded-tl-lg rounded-br-0 rounded-bl-0 p-2 fixed top-2 mx-auto w-64  mt-0 mb-2 text-center ">{errMsg}</p>
               <div style={{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:'center',
                width:"100%",
                margin:"auto"
            }}>
                <div className="fixed top-12 lg:translate-x-9 lg:mr-1 translate-x-0 bg-green-400" style={{
                    width: `${lineWidth}%`,
                    height: '4px',
                    transition: 'width 0.5s linear',
                }}></div>
                </div>
            </div>
        </div>
    )
}

export default Register