import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../shared/assets/img/Logo.png'
import { NavLink } from 'react-router-dom'
import Bacg from '../../shared/assets/img/image 8.png'

const AllHeader = () => {
    return (
        <div className='text-white flex  justify-between items-center p-6 relative z-10'>
            <Link to='/' > <img src={Logo} alt="" /> </Link>
            <div className="input">
                <input type="text" className='w-[350px] rounded-[30px] h-[42px] pt-[11px] pb-[11px] pl-[22px] border bg-[#0B111C82] outline-none' placeholder='Поиск' />
            </div>
            <div className=' flex gap-7 items-center'>
                <NavLink to='/' className=' hover:text-[#006AFF] '>Главная</NavLink>
                <NavLink className=' hover:text-[#006AFF]'>О компании</NavLink>
                <NavLink className=' hover:text-[#006AFF]'>Услуги</NavLink>
                <NavLink className=' hover:text-[#006AFF]'>Избранное </NavLink>
                <NavLink to='/register' className='border w-[189px] p-1 text-center rounded-lg hover:bg-[#006AFF] hover:border-[#006AFF]'>Регистрация</NavLink>
            </div>
        </div>

    )
}

export default AllHeader