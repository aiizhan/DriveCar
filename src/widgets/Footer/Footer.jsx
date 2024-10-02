import React from 'react'
import Logo from '../../shared/assets/img/Logo.png'
import Telegram from '@mui/icons-material/Telegram'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Container from '../../shared/helpers/Container'

const Footer = () => {
  return (
    <div className="bg-[url('../../shared/assets/png/futter.png')]  bg-cover bg-center text-white py-4 md:py-[48px]  ">
      <Container>
        <div className='flex  gap-[300px]'>
          <div className='flex gap-[100px] '>
            <div className='w-[318px] '>
              <img src={Logo} alt="" />
              <p className='mt-3 text-[16px] text-[#BABEC4]'>Мы предлагаем лучшие автомобили самых известных мировых брендов.</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-[20px]'>Компания</h2>
              <p className='text-[16px] text-[#BABEC4]'>Главная</p>
              <p className='text-[16px] text-[#BABEC4]'>О компании</p>
              <p className='text-[16px] text-[#BABEC4]' > Услуги</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3>Наши социальные сети</h3>
            <div className='flex gap-5 justify-center' >
              <Telegram />
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Footer