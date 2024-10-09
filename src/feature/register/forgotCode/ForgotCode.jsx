import { useState } from 'react'; // Добавьте этот импорт
import { useNavigate } from 'react-router-dom';
import './ForgotCode.css';

const ForgotCode = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // Этот useState теперь будет работать

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
        <div className='back2'>
            <div className='cont'>
                <div className="text-code">
                    <h3>Введите 4-значный код</h3>
                </div>
                <div className="prgf21">
                    <p>На адрес электронной почты, который вы указали, должен был прийти четырехзначный код.</p>
                </div>
                <div className='flex text-input'>
                    <input 
                        id="code1"
                        type="text" 
                        maxLength="1" 
                        onChange={(e) => handleInputChange(e, 'code2')} 
                    />
                    <input 
                        id="code2" 
                        type="text" 
                        maxLength="1" 
                        onChange={(e) => handleInputChange(e, 'code3')} 
                    />
                    <input 
                        id="code3" 
                        type="text" 
                        maxLength="1" 
                        onChange={(e) => handleInputChange(e, 'code4')} 
                    />
                    <input 
                        id="code4" 
                        type="text" 
                        maxLength="1" 
                    />
                </div>
                <div className="SMS">
                    <p>Отправить SMS еще раз</p>
                    <p>00:30</p>
                </div>
                <div className="btn-off-on">
                    <button type="button" onClick={handleCancel}>Отмена</button>
                    <button type="button" onClick={handleConfirm}>Подвердить</button>
                </div>
            </div>
        </div>
    );
};

export default ForgotCode;
