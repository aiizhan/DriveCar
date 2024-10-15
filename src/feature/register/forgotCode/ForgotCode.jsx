import { useState } from 'react'; // Добавьте этот импорт
import { useNavigate } from 'react-router-dom';
// import './ForgotCode.css';

const ForgotCode = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); 

    const handleInputChange = (e, nextInputId) => {
        if (e.target.value.length === 1 && nextInputId) {
            document.getElementById(nextInputId).focus(); 
        }
    };

    const handleConfirm = () => {
        const codeEntered = [
            document.getElementById('code1').value,
            document.getElementById('code2').value,
            document.getElementById('code3').value,
            document.getElementById('code4').value
        ].join('');

        if (codeEntered === '2104') {
            navigate('/addedPassw', { state: { email } }); // Передаем email
        } else {
            alert('Неправильный код. Попробуйте еще раз.');
        }
    };

    const handleCancel = () => {
        navigate('/forgotpassw'); // Перемещение на страницу ForgotPassw
    };

    return (
        <div className='w-[625px] h-[613px] rounded-[20px] bg-[#111120] m-auto p-[84px] mt-[60px]'>
            <div>
                <div className="flex justify-center text-white">
                    <h3 className='text-2xl font-bold mb-[35px]'>Введите 4-значный код</h3>
                </div>
                <div className="text-center mb-[60px] text-white">
                    <p>На адрес электронной почты, который вы указали, должен был прийти четырехзначный код.</p>
                </div>
                <div className='flex justify-center gap-[25px] text-black'>
                    <input 
                        id="code1"
                        type="text" 
                        maxLength="1"
                        className='w-[95px] h-[100px] rounded-[10px] bg-white text-center text-2xl' 
                        onChange={(e) => handleInputChange(e, 'code2')} 
                    />
                    <input 
                        id="code2" 
                        type="text" 
                        maxLength="1" 
                        className='w-[95px] h-[100px] rounded-[10px] bg-white text-center text-2xl' 
                        onChange={(e) => handleInputChange(e, 'code3')} 
                    />
                    <input 
                        id="code3" 
                        type="text" 
                        maxLength="1" 
                        className='w-[95px] h-[100px] rounded-[10px] bg-white text-center text-2xl' 
                        onChange={(e) => handleInputChange(e, 'code4')} 
                    />
                    <input 
                        id="code4" 
                        type="text" 
                        className='w-[95px] h-[100px] rounded-[10px] bg-white text-center text-2xl' 
                        maxLength="1" 
                    />
                </div>
                <div className="flex justify-between mt-[21px]">
                    <p className='text-[#00B7FF]'>Отправить SMS еще раз</p>
                    <p className='text-[#00B7ff]'>00:30</p>
                </div>
                <div className="flex justify-between mt-[60px]">
                    <button className='w-[200px] h-[60px] rounded-[10px] bg-[#306AD9] text-white' type="button" onClick={handleCancel}>Отмена</button>
                    <button className='w-[200px] h-[60px] rounded-[10px] bg-[#306AD9] text-white' type="button" onClick={handleConfirm}>Подвердить</button>
                </div>
            </div>
        </div>
    );
};

export default ForgotCode;
