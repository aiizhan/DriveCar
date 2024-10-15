import { Link } from 'react-router-dom'
import Logo from '../../shared/assets/img/Logo.png'
import Container from '../../shared/helpers/Container'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <Container>
      <div className='text-white flex  justify-between items-center p-6'>
        <Link to='/' > <img src={Logo} alt="" /> </Link>
        <div className=' flex gap-7 items-center'>
          <NavLink to='/' className=' hover:text-[#006AFF] '>Главная</NavLink>
          <NavLink className=' hover:text-[#006AFF]'>О компании</NavLink>
          <NavLink className=' hover:text-[#006AFF]'>Услуги</NavLink>
          <NavLink className=' hover:text-[#006AFF]'>Избранное </NavLink>
          <NavLink className='border w-[189px] p-1 text-center rounded-lg hover:bg-[#006AFF] hover:border-[#006AFF]'>Регистрация</NavLink>
        </div>

      </div>
    </Container>
  )
}

export default Header