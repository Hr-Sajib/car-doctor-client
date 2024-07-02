
const About = () => {


    return (
        <div id="aboutSection" className="lg:h-[550px] lg:mt-32 mx-36 flex gap-[200px] font-bc">
            <div>
                <img className="h-[430px] w-[430px] object-cover" src="https://i.ibb.co/mX6n1HT/person.jpg" alt="" />
                <img className="h-[300px] w-[300px] object-cover relative bottom-[200px] left-[230px] border-[10px] border-white" src="https://i.ibb.co/f1P7Xjn/parts.jpg" alt="" />
            </div>
            <div className="w-[50%]">
                <p className="text-3xl text-red-800">About us</p>
                <br />
                <p className="text-6xl">We are qualified & <br /> of experienced <br /> in this field</p>
                <br />
                <p className="text-xl">Welcome to Car Doctor, your trusted online destination for professional car repair services. With a commitment to excellence and customer satisfaction, we offer comprehensive maintenance and repair solutions to keep your vehicle running smoothly. Our skilled technicians use cutting-edge technology and genuine parts to deliver reliable and efficient service. Trust Car Doctor for quality care and peace of mind on the road.</p>
            
                <button className="bg-red-800 trans-btn text-white text-xl px-8 py-3 rounded-lg mt-10 hover:bg-red-700">Get More Info</button>
            </div>
        </div>
    );
};

export default About;