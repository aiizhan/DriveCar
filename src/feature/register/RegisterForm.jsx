import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const handleHomeRegisterClick = () => {
    navigate('/'); 
  }

  const handleLoginClick = () => {
    navigate('/login')
  }


  return (
    <form className='bg-[#111120] p-[55px] rounded-[20px] w-[625px] h-[620px] flex flex-col justify-between'>
      <KeyboardBackspaceIcon onClick={handleHomeRegisterClick} className='text-start font-bold text-5xl cursor-pointer text-white' />
      <h2 className='text-4xl font-medium mb-4 text-center text-white'>Регистрация</h2>
      <h2 className='text-white'>ФИО</h2>
      <input 
        type="text" 
        className='border p-2 mb-4 w-full text-white bg-[#292E39] rounded-[4px]' 
      />
      <h2 className='text-white'>Email</h2>
      <input 
        type="email" 
        className='border p-2 mb-4 w-full text-white bg-[#292E39] rounded-[4px]' 
      />
      <div className='relative mb-4'>
        <h2 className='text-white mb-[10px]'>Пароль</h2>
        <input 
          type={showPassword ? "text" : "password"} 
          className='border p-2 pr-10 w-full h-[40px] text-white bg-[#292E39] rounded-[4px]' 
        />
        <button 
          type="button" 
          onClick={togglePasswordVisibility} 
          className='absolute right-2 top-[52px] transform -translate-y-1/2 text-gray-500'
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </div>
      <div className='relative mb-4'>
        <h2 className='text-white mb-[10px]'>Подтвердите пароль</h2>
        <input 
          type={showConfirmPassword ? "text" : "password"} 
          className='border p-2 pr-10 w-full h-[40px] text-white bg-[#292E39] rounded-[4px]' 
        />
        <button 
          type="button" 
          onClick={toggleConfirmPasswordVisibility} 
          className='absolute right-2 top-[52px] transform -translate-y-1/2 text-gray-500'
        >
          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </div>
      <button type="submit"className='bg-blue-500 text-white p-2 rounded-[5px] mt-[20px]'>Регистрация</button>
        <p className='text-white flex justify-center items-center mt-[20px]'>У вас есть аккаунт? <span onClick={handleLoginClick}  className='text-[#00D1FF] cursor-pointer'>Войти</span></p>
    </form>
  );
}

export default RegisterForm;
