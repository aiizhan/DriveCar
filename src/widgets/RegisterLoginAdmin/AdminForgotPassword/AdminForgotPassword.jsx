import React from 'react'
import right from '../Assets/Right.svg';
import { useNavigate } from 'react-router-dom';
function AdminForgotPassword() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log('Email:', email);
    };

    const handleLogoClick = () => {
        navigate('/');
    };

  return (
    <div className="bg-[#111120] w-[625px] h-[416px] m-auto mt-[100px] rounded-[20px] relative p-[20px]">
            <div className='mb-5'>
                <img src={right} alt="Your Company" className='home mb-20 text-start relative' onClick={handleLogoClick} />
                <h2 className="text-center text-4xl font-bold text-white">Забыли пароль</h2>
                <h2 className="text-center text-2xl text-white">Введите свой аккаунт</h2>
            </div>

            <div className="mt-10 font">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-white bg-[#292e39] pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div onClick={() => {
                        handleSubmit,
                        navigate('/forgotCode');

                    }} className='bg-purple-600 hover:bg-purple-800 flex justify-center mt-10 h-10 rounded-[10px]' >
                        <button type="submit" className='w-515 border-none pop text-white'>Продолжить</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AdminForgotPassword
