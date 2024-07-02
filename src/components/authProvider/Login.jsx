import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoginModal from '../modals/LoginModal';
import { AuthContext } from './AuthProvider';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const {loginUser, googleSignIn} = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin =(e)=>{
      e.preventDefault();
      setLoading(true);
      const email = e.target.email.value;
      const password = e.target.password.value;

      loginUser(email, password)
      .then(res => {
        e.target.reset();
        console.log(res.user)
        setLoading(false)
        setShowModal(true)
      })
      .catch(error => {
        console.log(error.message);
        toast(error.message);    
        setLoading(false);
      
      });
    }

    const handleSignIpWithGoogle =()=>{
      googleSignIn()
            .then(res => {
                console.log(res.user);
                setShowModal(true)
            })
            .catch(error => {
                console.log(error.message);
                toast(error.message);
            });
    }


    return (
        <div className='lg:h-[700px] flex items-center justify-center'>
            <ToastContainer />
            <div className='font-bc text-xl'>
              <div className='lg:w-[600px] flex flex-col items-center mb-2 pt-10 lg:p-5 p-3 pb-8 mx-2 lg:mt-10  bg-gray-200 lg:mx-auto animate__animated animate__zoomIn'>
              <p className='font-bc-medium text-2xl text-center text-black mb-5'>Log In</p>
                <form onSubmit={handleLogin} action="">
                  <input className=' rounded-md p-2 lg:w-[500px] w-[320px]' type="email" name='email' required placeholder='Email' /> <br /> <br />
                  <input className=' rounded-md p-2 lg:w-[500px] w-[320px]' 
                    name='password' 
                    type={ passwordShow ? 'text' : 'password' }
                    placeholder='Password' 
                    required/> <br />
                  
                  <div onClick={()=>setPasswordShow(!passwordShow)} className='w-5 flex justify-end relative lg:left-[460px] left-[280px] lg:bottom-[30px] bottom-[30px]'>
                      { passwordShow ? <LuEyeOff/> : <LuEye/> }
                  </div>          
                  
                  <input className='bg-black hover:bg-gray-300 hover:text-black rounded-md text-white w-20 h-10' type="submit" 
                    value={loading?"Loading.." : "Log In"} />
                  
                  <div className='flex justify-between gap-2 bg-gray-100 items-center  rounded-md px-1 pl-3 mt-5'>
                    <p className='my-3'>Not have an account yet?</p>
                    <Link to="/signup"><button className='bg-black hover:bg-gray-300 hover:text-black rounded-md text-white w-20 h-10'>Register</button></Link>
                  </div>
                </form>  
                <div>
                        <p className="text-center mt-3">Or, sign in with</p>
                        <div className='flex gap-3 mt-4 justify-center'>
                            <button onClick={handleSignIpWithGoogle} className='flex w-[100px] hover:bg-gray-100 justify-center items-center gap-1 bg-white rounded-md p-2'>
                                <FaGoogle />Google
                            </button>
                            <button className='flex w-[100px] justify-center  items-center hover:bg-gray-100 gap-1 bg-white rounded-md p-2'>
                                <FaGithub />Github
                            </button>
                            <button className='flex w-[100px] justify-center  items-center hover:bg-gray-100 gap-1 bg-white rounded-md p-2'>
                                <FaFacebook />Facebook
                            </button>
                        </div>
                    </div>
              </div>
            </div>
            <LoginModal showModal={showModal} setShowModal={setShowModal}/>
          </div>
    );
};

export default Login;