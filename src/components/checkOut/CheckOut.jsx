import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const CheckOut = () => {

    const {cart} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const total = cart.reduce((sum, item)=> sum+parseFloat(item.price) , 0)
    console.log(total)
    return (
        <div className='mx-20 flex'>
            
            <div className=' w-[600px]'>
                <div>
                    <button onClick={()=>navigate(-1)} className='text-3xl text-red-700 mb-5'>←</button>
                    {
                        cart.map((item,index) =>

                        <div key={item._id} className=' flex font-bc  text-3xl' >
                            <p className=' w-10'>{index+1}</p>
                            <p className=' w-[400px]'>{item.title}</p>
                            <p className=' w-[100px]'>${item.price}</p>
                        </div>
                    )
                    }
                    <p>_____________________________________________________________________</p>
                    <div className='flex gap-[360px]'>
                        <p className='font-bc-medium text-5xl'>Total</p>
                        <p className='font-bc-medium text-5xl'>${total}</p>
                    </div>
                </div>

                <div className='w-[580px] flex justify-end mt-10'>
                    <button className='bg-red-900 text-white font-bc text-2xl rounded-md p-2 hover:bg-red-700'>Proceed To Pay</button>
                </div>
            </div>
            <div className='w-[700px] rounded-2xl p-5 ml-16 bg-gray-100'>
                <p className='text-center text-2xl mb-5 font-bc'>Provide Information To Finilize</p>
                    <form className='flex flex-col items-center text-center' action="">
                        <input className=' rounded-lg border-gray-400 no-focus-outline w-[600px] h-10 mb-5 text-xl font-bc p-1 pl-2' type="text" name="name" placeholder='Enter Your Name' id="" required />
                        <input className=' rounded-lg border-gray-400 no-focus-outline w-[600px] h-10 mb-5 text-xl font-bc p-1 pl-2' type="text" name="phone" placeholder='Enter Phone Number' id="" required />
                        <input className=' rounded-lg border-gray-400 no-focus-outline w-[600px] h-10 text-xl font-bc p-1 pl-2' type="text" name="phone" placeholder='Enter Phone Number' id="" required />
                        <br /><textarea className=' border-gray-400 h-36 w-[600px] no-focus-outline p-2 font-bc text-xl rounded-xl' placeholder='Enter Full Address' name="address" id="" ></textarea>
                        <br /><textarea className='h-20 w-[600px] no-focus-outline mt-2 p-2 font-bc text-xl rounded-xl' placeholder='Any Message (Optional)' name="address" id=""></textarea>
                       
                      <div className='p-3 border-2 rounded-xl w-[600px] mt-8'>
                            <p className='font-bc text-xl text-gray-500 text-left ml-5 mb-5'>Choose From</p>
                            <div className='flex items-center justify-center'>
                                <input type="radio" name="option" value='doorStep' id="" /> 
                                <div className='flex gap-1 items-center mr-10 ml-2'>
                                    <img className='h-12 border rounded-full border-black p-1' src="https://i.ibb.co/j4gKnZc/doorStep.png" alt="" />
                                    <p className='font-bc text-xl'>Door Step Service</p>
                                </div>

                                <input type="radio" name="option" value='servicePoint' id="" />
                                <div className='flex gap-1 items-center mr-5 ml-2'>
                                        <img className='h-12 border rounded-full border-black p-1' src="https://i.ibb.co/GTFfnPS/service-Point.png" alt="" />                            
                                        <p className='font-bc text-xl'>Door Step Service</p>
                                </div>
                            </div>

                        </div>
                    </form>
            </div>
        </div>
    );
};

export default CheckOut;