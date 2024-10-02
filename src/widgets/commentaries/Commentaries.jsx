import React from 'react'
import Container from '../../shared/helpers/Container'
import './Commentaries.css'
import Profile from '../../shared/assets/img/Profile.png'
import Left from '../../shared/assets/svg/arrow-left.svg'
import Right from '../../shared/assets/svg/arrow-right.svg'


const Commentaries = () => {
    return (
        <Container>
            <div className="text-white mt-[58px] text-center">
                <h1 className='text-[28px] uppercase font-semibold'>Что говорят <span className='ml-[13px] pt-[2px] pb-[2px] pr-[24px] pl-[24px]  bg-[#001A72] rounded-[2px]'>ЛЮДИ</span></h1>
                <p className='w-[950px] m-auto text-[24px] mt-[20px]'>В данном сервисе мы уже собрали для вас отзывы отнаших клиентов которые уже воспользовались нашим сервисом по подбору автомобиль</p>
            </div>
            <div className="cards p-[10px] align-center flex flex-nowrap gap-[25px] justify-center overflow-x-auto mt-[48px]">
                <div className="card w-[386px] h-[330px] bg-[#1A1C7182] rounded-[20px] pt-[25px] pr-[25px] pl-[25px] pb-[25px]">
                    <div className="img-text flex items-center gap-[20px]">
                        <img src={Profile} alt="" />
                        <h2 className='text-white text-[24px]'>Кортни Генри</h2>
                    </div>
                    <div className="text-white text-[16px] font-normal mt-[27px]">
                        <p>Внешний вид автомобиля сразу привлек мое внимание. Дизайн современный и агрессивный, особенно мне понравились светодиодные фары и спортивные линии кузова. Цвет металлик придает машине дополнительную солидность.</p>
                    </div>
                    <div className="date mt-[10px]">
                        <p className='text-[#fff] text-end'>16:34</p>
                    </div>
                </div>
                <div className="card w-[386px] h-[330px] bg-[#1A1C7182] rounded-[20px] pt-[25px] pr-[25px] pl-[25px] pb-[25px]">
                    <div className="img-text flex items-center gap-[20px]">
                        <img src={Profile} alt="" />
                        <h2 className='text-white text-[24px]'>Кортни Генри</h2>
                    </div>
                    <div className="text-white text-[16px] font-normal mt-[27px]">
                        <p>Внешний вид автомобиля сразу привлек мое внимание. Дизайн современный и агрессивный, особенно мне понравились светодиодные фары и спортивные линии кузова. Цвет металлик придает машине дополнительную солидность.</p>
                    </div>
                    <div className="date mt-[10px]">
                        <p className='text-[#fff] text-end'>16:34</p>
                    </div>
                </div>
                <div className="card w-[386px] h-[330px] bg-[#1A1C7182] rounded-[20px] pt-[25px] pr-[25px] pl-[25px] pb-[25px]">
                    <div className="img-text flex items-center gap-[20px]">
                        <img src={Profile} alt="" />
                        <h2 className='text-white text-[24px]'>Кортни Генри</h2>
                    </div>
                    <div className="text-white text-[16px] font-normal mt-[27px]">
                        <p>Внешний вид автомобиля сразу привлек мое внимание. Дизайн современный и агрессивный, особенно мне понравились светодиодные фары и спортивные линии кузова. Цвет металлик придает машине дополнительную солидность.</p>
                    </div>
                    <div className="date mt-[10px]">
                        <p className='text-[#fff] text-end'>16:34</p>
                    </div>
                </div>

            </div>
            <div className="buttons text-white margin-[auto] flex items-center justify-center gap-[20px] mt-[25px]">
                <button className='p-[14px] border rounded-[50%]'>
                    <img src={Left} alt="" />
                </button>
                <button className='p-[14px] border rounded-[50%]'>
                    <img src={Right} alt="" />
                </button>
            </div>
        </Container>
    )
}

export default Commentaries