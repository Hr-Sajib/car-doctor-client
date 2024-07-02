import React, { useEffect, useState } from 'react';
import { useTypewriter, Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev % totalSlides) + 1);
        }, 2500); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [totalSlides]);

    return (
        <div className="flex justify-center mb-16">
            <div className="carousel w-[1600px] rounded-xl">
                {[...Array(totalSlides)].map((_, index) => (
                    <div
                        id={`slide${index + 1}`}
                        className={`carousel-item relative w-full h-full object-cover ${currentSlide === index + 1 ? 'block' : 'hidden'}`}
                        key={index}
                    >
                        <img
                            src={`https://i.ibb.co/${['5G7dfkn/5', 'xHNhJMF/1', 'CbVSChL/2', 'n6zK3BZ/3', '0X5gT59/4'][index]}.jpg`}
                            className="w-full h-[800px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-black/0"></div>

                        <div className="absolute left-5 right-16 top-[650px] flex justify-end gap-3">
                            
                        </div>
                        <div className='relative bottom-[800px]'>
                            <div className="absolute border m-5 p-5 h-[480px] rounded-lg pl-10 pt-10">
                                <p className="text-white font-bc text-[100px] inline">Affordable <br /> Price For Car Services</p>
                                <p className="font-bc text-gray-300 text-3xl w-[800px]">Welcome to our premier car repair service, where our skilled technicians are dedicated to delivering exceptional care and expertise to ensure your vehicle runs smoothly and safely, so you can drive with confidence.</p>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute flex lg:right-[887px] lg:top-[635px]'>
                <div className="flex flex-col gap-2 w-[425px] border h-[265px] rounded-lg p-3">
                        <button className="font-bc rounded-md bg-gray-100 text-black hover:bg-gray-500 hover:text-white px-10 py-3 text-xl trans-btn ">Discover More</button>
                        <button className="font-bc rounded-md bg-gray-100 text-black hover:bg-gray-500 hover:text-white px-10 py-3 text-xl trans-btn ">Latest Project</button>
                        <div className="text-gray-300 font-bc text-[80px]">
                            <Typewriter
                                words={['Diagnosis', 'Repairing', 'Furnishing', 'Modifying']}
                                loop={100}
                                cursor
                                cursorStyle=' >'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </div>
                </div>
                <div className="relative flex justify-center items-center left-4 border h-[265px] w-[420px] rounded-lg">
                    <img className="h-[220px] rotate-animation" src="https://i.ibb.co/JpRyFw3/engine-icon.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;

