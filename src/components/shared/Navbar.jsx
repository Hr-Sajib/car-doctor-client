import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { AuthContext } from '../authProvider/AuthProvider';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const location = useLocation().pathname;
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
    }

    useEffect(() => {
        Aos.init();
    }, []);

    const defaultImage = "https://i.ibb.co/HP0qqbq/MrBean.png"; 

    return (
        <div id='navbar'>
            <div className='lg:border-0 border h-20 mb-5 flex justify-between items-center lg:px-40 px-4 font-bc lg:mr-2'>
                {/* Icon Div */}
                <div className='flex items-center gap-1'>
                    {/* Options Icon */}
                    <div onClick={() => setDropDown(!dropDown)}>
                        {
                            !dropDown ?
                                <img className='lg:hidden h-8' src="https://i.ibb.co/JjnzjFs/opt.png" alt="" />
                                :
                                <img className='lg:hidden h-8' src="https://i.ibb.co/Dzgdh1N/cross.png" alt="" />
                        }
                    </div>

                    <Link to="/">
                        <div className='flex items-center'>
                            <img className='lg:h-10 hidden lg:flex h-12 lg:border-0 border-2 border-red-800 rounded-xl lg:p-0 p-1' src="https://i.ibb.co/GCG87PR/181806.png" alt="" />
                            <p className='text-4xl'>Car Doctor</p>
                        </div>
                    </Link>
                </div>

                {/* Navlinks Div */}
                <div>
                    <ul className='lg:flex hidden justify-center gap-16 border h-10 pt-1 rounded-full px-5 text-xl'>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-700 underline-animation' : "underline-animation"} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-700 underline-animation' : "underline-animation"} to="/about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-700 underline-animation' : "underline-animation"} to="/services">Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-700 underline-animation' : "underline-animation"} to="/blogs">Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-red-700 underline-animation' : "underline-animation"} to="/contacts">Contacts</NavLink></li>
                    </ul>
                </div>

                {/* User Div */}
                <div>
                    {
                        user ?
                            <div className='flex gap-2'>
                                <div className='flex gap-2 items-center border p-1 pl-5 rounded-full'>
                                    <p className='text-xl'>{user?.displayName}</p>
                                    <img
                                        className='h-10 w-10 object-cover rounded-full border border-gray-500'
                                        src={user?.photoURL || defaultImage}
                                        alt="User"
                                        onError={(e) => { e.target.src = defaultImage; }}
                                    />
                                </div>
                                <button onClick={handleLogOut} className='text-2xl font-bc-medium text-red-700 hover:text-black'>Log Out</button>
                            </div>
                            :
                            <button onClick={() => navigate('/login')} className={location !== '/login' && location !== '/signup' ? 'text-2xl font-bc-medium hover:text-red-700' : 'text-2xl font-bc-medium text-red-700'}>LogIn</button>
                    }
                </div>

            </div>
            {
                dropDown ?
                    <div data-aos="fade-right" className='bg-red-200 w-[130px] ml-3 -mt-3 rounded-xl fixed py-5'>
                        <ul className='flex flex-col gap-5 pl-2'>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-red-800 px-4 py-3 rounded-lg' : "rounded-lg px-4 py-3 text-white"} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-red-800 px-4 py-3 rounded-lg' : "rounded-lg px-4 py-3 text-white"} to="/about">About</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-red-800 px-4 py-3 rounded-lg' : "rounded-lg px-4 py-3 text-white"} to="/services">Services</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-red-800 px-4 py-3 rounded-lg' : "rounded-lg px-4 py-3 text-white"} to="/blogs">Blogs</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white bg-red-800 px-4 py-3 rounded-lg' : "rounded-lg px-4 py-3 text-white"} to="/contacts">Contacts</NavLink></li>
                        </ul>
                    </div>
                    :
                    null
            }

        </div>
    );
};

export default Navbar;
