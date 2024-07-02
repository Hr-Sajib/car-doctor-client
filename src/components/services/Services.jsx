import axios from 'axios';
import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const Services = () => {
    const [services, setServices] = useState([]);
    const {cart, setCart} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5500/getServices')
            .then(d => {
                setServices(d.data);
                console.log(d.data)
            });
    }, []);



    const handleAddCart=(service)=>{
        const btn = document.getElementById(`addBtn${service._id}`)
        btn.innerText= 'Added';
        btn.classList.remove('bg-black')
        btn.classList.add('bg-gray-500')


        const serviceExists = cart.some(item => item._id === service._id);
        if(serviceExists){
            return
        }
        else{
            const newCart = [...cart, service];
            setCart(newCart)

        }

    }

    return (
        <div className='flex mb-10 justify-between'>
            <div className=''>
                <div className=' mt-2'>
                    <p className="text-3xl font-bc text-red-700">Our Service Areas</p>
                    <p className='font-bc text-xl'>
                        At Car Doctor, we serve the entire metro area with expert car repair services.
                        Our skilled technicians ensure your vehicle runs smoothly and safely,
                        providing top-notch care for all your automotive needs.
                    </p>
                </div>
            
                <div className='flex justify-center my-10'>
                    <div className='grid grid-cols-3  gap-3'>
                        {services.map(service => <Service service={service} key={service._id} handleAddCart={handleAddCart} />)}
                    </div>
                </div>
            </div>
            <div className='bg-red-50 mt-[110px] w-[350px] min-h-[100px] mb-10 p-3 rounded-xl'>
                <p className='text-xl text-center font-bc-medium'>My Cart</p>
                <p>_______________________________________</p>
                {
                    cart.map((item,index) =>

                    <div key={item._id} className=' flex font-bc justify-between text-xl' >
                        <p className=' w-3'>{index+1}</p>
                        <p className=' w-[180px]'>{item.title}</p>
                        <p className=' w-16'>${item.price}</p>

                    </div>
                )
                }
                <div>
                    <button onClick={()=>navigate('/checkout')} className='bg-black text-red-200 px-5 py-2 rounded-lg mt-5'>Check Out</button>
                </div>
                
            </div>
        </div>
    );
};

export default Services;

const Service = ({ service, handleAddCart }) => {


    return (
        <div className='service-card p-2 rounded-xl bg-gray-200 hover:bg-gray-100 border border-gray-200 hover:border-red-900'>
            <img className="h-[320px] w-[430px] object-cover mx-auto rounded-xl" src={service.img} alt="" />
            <p className='text-3xl font-bc-medium ml-1 my-2'>{service.title}</p>

            <div className='flex justify-between items-center pr-2'>
                <p className='text-2xl font-bc-medium ml-1 my-2 text-red-800'>${service.price}</p>
                <div className='arrow-wrapper h-10 rounded-full'>
                    <button id={`addBtn${service._id}`} onClick={()=>handleAddCart(service)} className='addBtn bg-black text-gray-100 hover:bg-red-900 p-1 px-5 rounded-md font-bc text-xl'>Add To Cart <span className='arrow'>➔</span></button>
                </div>
            </div>
        </div>
    );
}
