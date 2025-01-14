import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles\
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [inputValue,setInputValue] = useState("");
  const [match,setMatch] = useState();

  const userValue = 'abcd';
  const userPassword = '1234';

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = (event) =>{
       setInputValue(event.target.value);
  }
  const handlePassword = (e) =>{
    setMatch(e.target.value);
  }

  const handleSubmit = () =>{
     if((inputValue === userValue) && (match === userPassword)){
        navigate("/Dashboard")
     }
     else{
      alert("username or password mismatch")
     }
  }

  return (
    <div className=" h-screen w-screen flex flex-col   items-center">
       <img className="h-16 w-16" src="/swachta.png" alt="" /> 
      <div className=" h-4/5 w-5/6 grid grid-cols-12">
        {/* login section */}

        {/* welcome text */}
        <div className="h-full col-span-6  grid grid-cols-1">
          <div
            data-aos="zoom-in"
            className="flex justify-center  text-3xl font-bold "
          >
            Welcome
          </div>
            <p className=" flex justify-center font-semibold mb-5">Saran Swachta Abhiyan</p>
          <form
            data-aos="zoom-in"
            className="flex flex-col items-center mb-20"
            action=""
          >
            {/* username section */}
            <div >
              <h1 className="mb-2">Username</h1>
              <input
                className="hover:border-blue-400 rounded-lg w-96 placeholder-gray-500 px-4 py-2 border-2 border-gray-500"
                type="text"
                value={inputValue}
                name=""
                id=""
                onChange={handleLogin}
                placeholder="Username"
              />
            </div>

            {/* password section */}
            <div className="mt-5">
              <h1 className="mb-2">Password</h1>
              <div className="relative flex items-center">
                {/* Input Field */}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-96 rounded-lg py-2 px-4 border-2 border-gray-500 hover:border-blue-500 pr-12"
                  value={match}
                  onChange={handlePassword}
                />

                {/* Show/Hide Password Button */}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 text-gray-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <button className="text-gray-800 mt-2 flex justify-end">forgot password</button>
            </div>

            {/* login button */}
            <div className="mt-5">
              <button className="bg-black w-96 text-white px-4 py-2 rounded-2xl hover:bg-gray-900" onClick={handleSubmit}>
                Login
               </button>
            </div>


            {/* other login option button */}
            <h1 className="mt-4">------or continue with------</h1>
            <div className="flex gap-5 mt-4">
              <button>
                <img className="h-10 w-10" src="/google.png" alt="" />
              </button>
              <button>
                <img className="h-10 w-10" src="/apple.png" alt="" />
              </button>
              <button>
                <img className="h-10 w-10" src="/facebook.png" alt="" />
              </button>
            </div>

            {/* register button */}
            <h1 className="mt-5">not a member? <button className="text-blue-500">Register now</button></h1>
          </form>
        </div>

        {/* picture section */}
        <div className="h-full col-span-6 bg-gray-100 rounded-lg flex justify-center items-center ">
          <img data-aos="zoom-in" className=" flex justify-center rounded-xl " src="/swachta_image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
