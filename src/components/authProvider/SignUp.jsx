import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from './AuthProvider';
import axios from 'axios';
import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import SignupModal from "../modals/SignupModal";



const Image_Hosting_key = import.meta.env.VITE_Image_Hosting_key;
const Image_Hosting_API = `https://api.imgbb.com/1/upload?key=${Image_Hosting_key}`;

const SignUp = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [isUploading, setIsUploading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();


    //collect and check data

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.files[0];
        const termsChecked = e.target.checkbox.checked;

        if (!termsChecked) {
            toast("Accept terms and conditions first");
            return;
        }

        if (!/^(?=.*\d)/.test(password)) {
            toast("Use a valied password");
            return;
          }
          else if(!/^(?=.*[a-z])/.test(password)){
            toast("Use a small latter");
            return;
          } 
          else if(!/^(?=.*[A-Z])/.test(password)){
            toast("Use a capital latter");
            return;
          } 
          else if(!/^(?=.*[!@#$%^&*])/.test(password)){
            toast("Use a special character");
            return;
          } 
          else if(!/^(?=.{6,})/.test(password)){
            toast("Password length should be at least 6");
            return;
          } 




    // upload image and get url

        const formData = new FormData();
        formData.append('image', photo);

        try {
            setIsUploading(true);
            const res = await axios.post(Image_Hosting_API, formData);
            const providedImageUrl = res.data.data.url;

            const user = await createUser(name, email, password, providedImageUrl);
            if(user){
                console.log(user)
                toast("Registered successfully!");
                e.target.reset();
                setIsUploading(false);
                setShowModal(true)
            }
            

        } catch (error) {
            console.log(error.message);
            toast("An error occurred. Please try again.");
            setIsUploading(false);
        }
    };




    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                setShowModal(true)
            })
            .catch(error => {
                console.log(error.message);
                toast("An error occurred with Google Sign-In. Please try again.");
            });
    };

    return (
        <div className='lg:h-[700px] flex items-center justify-center'>
            {/* <img src="/public/shield.gif" alt="" /> */}
            <ToastContainer />
            <div className="font-bc text-lg lg:w-[600px] flex flex-col items-center mb-2 lg:p-5 p-2 pt-10 pb-8 mt-3 bg-gray-200 mx-2 lg:mx-auto animate__animated animate__zoomIn">
                <p className='text-2xl font-bc-medium text-black text-center mb-6'>Sign Up</p>
                <form className="" onSubmit={handleRegister}>
                    <input
                        className="  rounded-md p-2 lg:w-[500px] w-[320px]"
                        required
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                    <br /><br />
                    <input
                        className="  rounded-md lg:w-[500px] w-[320px] p-2"
                        required
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <br /><br />
            
                    <div className="flex items-center border border-white rounded-md w-[500px] h-[45px]">
                        <p className="w-[25%] h-[45px] p-2 rounded-l-md bg-white text-gray-500 border-white text-center">Profile Photo</p>
                        <input
                            className="rounded-md p-2 lg:w-[500px] w-[320px]"
                            required
                            name="photo"
                            type="file"
                            id="photo"
                            placeholder="Profile Photo"
                        />
                    </div>

                    <br /><br />
                    <input
                        className="relative bottom-7 rounded-md p-2 lg:w-[500px] w-[320px]"
                        required
                        name="password"
                        type={passwordShow ? "text" : "password"}
                        placeholder="Password"
                    />
                    <br />
                    <div
                        onClick={() => setPasswordShow(!passwordShow)}
                        className="w-5 flex justify-end relative lg:left-[460px] lg:bottom-[58px] left-[280px] bottom-[27px]"
                    >
                        {passwordShow ? <LuEyeOff /> : <LuEye />}
                    </div>
                    <div className="flex relative bottom-4 gap-2 mb-2">
                        <input type="checkbox" name="checkbox" id="" />
                        <p>Accept all terms and conditions</p>
                    </div>
                    <input 
                        className="bg-black relative bottom-4 hover:bg-gray-300 hover:text-black  rounded-md text-white w-20 h-10"
                        type="submit"
                        value={isUploading ? 'Loading..': 'Register'}
                        disabled={isUploading}
                    />
                    <div className="flex justify-between gap-2 bg-gray-100 items-center   rounded-md px-1 pl-3 mt-5">
                        <p className="my-3">Do you already have an account?</p>
                        <Link to="/login">
                            <button className="bg-black hover:bg-gray-300 hover:text-black rounded-md text-white w-20 h-10">
                                Login
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p className="text-center mt-3">Or, sign in with</p>
                        <div className='flex gap-3 mt-4 justify-center'>
                            <button onClick={handleSignInWithGoogle} className='flex w-[100px] hover:bg-gray-100 justify-center items-center gap-1 bg-white rounded-md p-2'>
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
                </form>
            </div>
            <SignupModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
};

export default SignUp;
