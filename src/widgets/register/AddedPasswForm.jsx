import backg from "../../shared/assets/img/image 47.png";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const AddedPasswForm = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/login');
    };

    const handleCodeClick = () => {
        navigate('/addedcode');
    };

    return (
        <div
            className="h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${backg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <form className="bg-[#111120] p-[55px] w-[625px] h-[416px] rounded-[20px] text-white">
                <KeyboardBackspaceIcon 
                    className="text-white cursor-pointer " 
                    onClick={handleBackClick} 
                />
                <div className="text-center mt-[5px]">
                    <h1 className="font-bold text-3xl">Забыли пароль</h1>
                    <h4 className="text-base">Введите свой Email для восстановления!</h4>
                </div>

                <label className="flex flex-col mb-[45px] mt-[50px]">
                    <h2>Email</h2>
                    <input 
                        className="bg-[#292E39] border border-gray-500 p-2 rounded-[4px] text-white" 
                        type="email" 
                        required 
                    />
                </label>

                <button onClick={handleCodeClick} className="bg-blue-500 text-white p-2 rounded-[5px] w-full">Продолжать</button>
            </form>
        </div>
    );
}

export default AddedPasswForm;
