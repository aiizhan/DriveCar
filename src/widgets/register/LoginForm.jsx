import { useState } from 'react';
import backg from '../../shared/assets/img/image 47.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/register'); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleRegisterClick = () => {
    navigate('/register')
  }

  const handleAddedPasswClick = () => {
    navigate('/addedpassw')
  }

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <form className='bg-[#111120] w-[625px] h-[613px] rounded-[20px] p-[55px] text-white'>
        <KeyboardBackspaceIcon
          className='text-white cursor-pointer mr-2'
          onClick={handleBackClick}
        />
        <h1 className='text-2xl font-bold flex justify-center mb-[53px]'>Войти</h1>

        <label>
          <h2>Email</h2>
          <input
            type="text"
            className='border p-2 mb-[58px] w-full text-white bg-[#292E39] rounded-[4px] '
          />
        </label>

        <label className='relative'>
          <h2>Password</h2>
          <input
            type={showPassword ? "text" : "password"}
            className='border p-2 mb-[20px] w-full text-white bg-[#292E39] rounded-[4px]'
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className='absolute right-2 top-[120px] text-gray-500'
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </label>

        <div className='flex justify-between mb-[20px]'>
          <h3>запомнить</h3>
          <h3  className='text-[#36CBFF] cursor-pointer' onClick={handleAddedPasswClick}>Забыли пароль?</h3>
        </div>

        <button type="submit" className='bg-blue-500 text-white p-2 rounded-[5px] w-[513px]'>Войти</button>

        <p className='text-center mt-[20px]'>Вы ещё не зарегистрированы? <span onClick={handleRegisterClick} className='text-[#00D1FF] cursor-pointer'>Зарегистрировация</span></p>
      </form>
    </div>
  );
};

export default LoginForm;
