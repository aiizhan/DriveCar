// import './Login.css';
import right from '../../../shared/assets/img/Vector.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

const Login = ({ toggleForm }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const handleForgotClick = () => {
        navigate('/forgotPassw')
    }

    return (
        <div className='bg-[#111120] w-[625px] h-[613px] rounded-[20px] text-white'>
            <div className="min-h-full flex-col px-6 py-12 lg:px-8">
                <div className='mb-5'>
                    <img src={right} alt="Your Company" className='home mb-20 text-start' onClick={handleLogoClick} />
                    <h2 className="text-center text-4xl font-bold text-white">Войти</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full font">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#292E39] pl-3 text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#292E39] pl-3 text-white"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                >
                                    {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                </button>
                            </div>
                        </div>

                        <div className="switch-btn flex justify-between items-center" onClick={toggleRememberMe}>
                            <div className='flex'>
                                {rememberMe ? <ToggleOnOutlinedIcon className='mr-2 backk cursor-pointer' /> : <ToggleOffOutlinedIcon className='mr-2 backk cursor-pointer' />}
                                <h3>Запомнить</h3>
                            </div>
                            <div className='tim cursor-pointer'>
                                <h3 className='font-semibold leading-6 text-indigo-400 hover:text-indigo-600' onClick={handleForgotClick}>Забыли пароль?</h3>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-gray-500">
                        у вас нет аккаунта? { }
                        <a href="#" onClick={toggleForm} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-600">Зарегистрироваться</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
