import { useState } from 'react';
import HomeRegister from './homeRegister/HomeRegister';
import logoreg from '../../shared/assets/img/image 47.png';
import Login from './Login/Login';

const Register = () => {
    const [isLogin, setIsLogin] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${logoreg})`,
                width: '100%',
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {isLogin ? <Login toggleForm={toggleForm} /> : <HomeRegister toggleForm={toggleForm} />}
        </div>
    );
};

export default Register;
