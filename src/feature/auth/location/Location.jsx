import { useLocation } from "react-router-dom";

const Location = () => {
    const location = useLocation();
    const { email, newPassword } = location.state || {};

    return (
        <div className='text-white flex flex-col justify-center items-center'>
            <div className=''>
                <h1 className="font-semibold text-2xl mb-[20px]">Welcom!</h1>
                <p>Email: {email}</p>
                <p>Password: {newPassword}</p>
            </div>
        </div>
    );
};
export default Location;