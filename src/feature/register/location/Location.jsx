import { useLocation } from 'react-router-dom';
import './Location.css'

const Location = () => {
    const location = useLocation();
    const { name, email } = location.state || {};

    console.log('Location state:', location.state);


    return (
        <div className='home'>
            <div className='locat'>
                <h1>Welcome!</h1>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Location;
