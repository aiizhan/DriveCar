import right from '../../../shared/assets/img/Vector.svg';
// import './HomeRegister.css';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import { useNavigate } from 'react-router-dom';

const HomeRegister = ({ toggleForm }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const [showEmail, setShowEmail] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        navigate('/location', { state: { name, email, } });
    };


    // const toggleEmailVisibility = () => {
    //     setShowEmail(!showEmail);
    // };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };


    return (
        <div className='bg-[#111120] w-[625px] h-[658px] rounded-[20px]'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div>
                    <img src={right} alt="Your Company" className='home' onClick={handleLogoClick} />
                    <h2 className="text-center text-2xl font-bold text-white">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full font">
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">ФИО*</label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#292E39] text-white pl-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email*</label>
                            <div className="mt-2 relative">
                                <input
                                    id="email"
                                    name="email"
                                    type='email'
                                    autoComplete="email"
                                    // value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#292E39] text-white pl-2"
                                />
                                <button
                                    type="button"
                                    // onClick={toggleEmailVisibility}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                >
                                    {/* {showEmail ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />} */}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password*</label>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#292E39] text-white pl-2"
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

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-white">Confirm Password*</label>
                            <div className="mt-2 relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#292E39] text-white pl-2"
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                >
                                    {showConfirmPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                </button>
                            </div>
                        </div>


                        <div className="switch-btn flex items-center text-white" onClick={toggleRememberMe}>
                            {rememberMe ? <ToggleOnOutlinedIcon className='mr-2 text-3xl cursor-pointer' /> : <ToggleOffOutlinedIcon className='mr-2 backk cursor-pointer' />}
                            <h3>Запомнить</h3>
                        </div>


                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    <p className="mt-5 text-center text-gray-500">
                        у вас есть аккаунт?
                        <a href='#' onClick={toggleForm} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Войти</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeRegister;
