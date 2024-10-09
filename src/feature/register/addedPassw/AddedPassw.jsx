import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './AddedPassw.css';
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
        setError(''); // Сбрасываем ошибку перед проверкой

        if (newPassword.length < 8) {
            setError('Пароль должен содержать не менее 8 символов!');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Пароли не совпадают!');
            return;
        }

        console.log('Новый пароль:', newPassword);
        
        alert('Пароль успешно изменен!');
        navigate('/login');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfPasswordVisibility = () => {
        setShowConfPassword(!showConfPassword);
    };

    return (
        <div className='back-passw'>
            <div className="passw">
                <h2>Создать пароль для {email}</h2>
                <div className='air'>
                    <p>Выберите надежный пароль! Минимальная длина пароля 8 символов.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='added'>
                        <label>Новый пароль:</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="w-full pr-10"
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
                    <div className='added'>
                        <label>Подтвердите новый пароль:</label>
                        <div className="relative">
                            <input
                                type={showConfPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full pr-10"
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
                    <button className='bg-purple-800 contin' type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
};

export default AddedPassw;
