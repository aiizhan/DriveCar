import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const AddedPassw = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
    
        if (newPassword.length < 8) {
            setError('Пароль должен содержать не менее 8 символов!');
            return;
        }
    
        if (newPassword !== confirmPassword) {
            setError('Пароли не совпадают!');
            return;
        }
    
        navigate('/location', { state: { email, newPassword } });
    };
    

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfPasswordVisibility = () => {
        setShowConfPassword(!showConfPassword);
    };

    return (
        <div className='back-passw m-auto p-[50px] bg-[#111120] mt-[60px] w-[615px] h-[650px] rounded-[20px] text-white'>
            <div className="passw w-[515px] h-[450px]">
                <h2 className='text-center mt-[60px] text-3xl font-medium'>Создать пароль для {email}</h2>
                <div className='w-[331px] text-center ml-[92px] mt-[15px]'>
                    <p className='w-[331px]'>Выберите надежный пароль! Минимальная длина пароля 8 символов.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col mt-10'>
                        <label>Новый пароль:</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="w-full pr-10 h-[35px] rounded-[4px] bg-[#292E39] pl-3 "
                                style={{border:'1px solid white'}}
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
                    <div className='flex flex-col mt-[35px]'>
                        <label>Подтвердите новый пароль:</label>
                        <div className="relative">
                            <input
                                type={showConfPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full pr-10 h-[35px] rounded-[4px] bg-[#292E39] pl-3"
                                style={{border:'1px solid white'}}
                            />
                            <button
                                type="button"
                                onClick={toggleConfPasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                            >
                                {showConfPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button className='bg-purple-700 contin hover:bg-purple-600 w-[515px] h-[53px] mt-[30px] rounded-[10px]' type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
};

export default AddedPassw;
