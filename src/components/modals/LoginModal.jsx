import { useEffect } from "react";

const LoginModal = ({showModal, setShowModal}) => {

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showModal, setShowModal]);



    return (
        showModal &&
        <div className="fixed z-10 inset-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm">
            <div className="zoom-in bg-white lg:w-[700px] w-[300px] lg:h-[300px] text-center lg:p-10 p-4 mt-[300px] mx-auto">
                <img src="/public/shield.gif" className="lg:h-[100px] mx-auto" alt="" />
                {/* another login icon https://www.flaticon.com/free-animated-icon/verified_7920939?related_id=7920939 */}
                {/* another signin icon https://www.flaticon.com/free-animated-icon/user_6569161?related_id=6569161 */}
                <p className="font-bc text-6xl">Logged In</p>
            </div>
        </div>
    );
};

export default LoginModal;