import React from 'react';
import { Carousel } from 'antd';
import BannerImg from '../../shared/assets/img/banner.png';
import modal from '../../shared/assets/img/modal.png'
import Container from '../../shared/helpers/Container';



const AllBaner = () => {
    return (
        <div>
            <Carousel dots={true} arrows infinite={true} autoplay={true}>
                <div className='relative'>
                    <div
                        className="w-full h-[470px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${BannerImg})` }}
                    >
                    </div>
                    <div className='absolute top-[0] w-full h-[470px] text-white pt-[96px]' style={{ backgroundImage: `url(${modal})` }}>
                        <Container>
                            <h1 className=' text-[48px] font-semibold w-[400px]'>Электромобили в Бишкеке</h1>
                            <h3 className='bg-[#01060E96] mt-[40px] text-[27px] pl-[18px] pr-[18px] pt-[30px] pb-[30px] w-[410px] rounded-2xl'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h3>
                            <p className='text-[24px] font-semibold'>+996 700-72-77-45</p>
                        </Container>
                    </div>
                </div>
                <div className='relative'>
                    <div
                        className="w-full h-[470px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${BannerImg})` }}
                    >
                    </div>
                    <div className='absolute top-[0] w-full h-[470px] text-white pt-[96px]' style={{ backgroundImage: `url(${modal})` }}>
                        <Container>
                            <h1 className=' text-[48px] font-semibold w-[400px]'>Электромобили в ОШ</h1>
                            <h3 className='bg-[#01060E96] mt-[40px] text-[27px] pl-[18px] pr-[18px] pt-[30px] pb-[30px] w-[410px] rounded-2xl'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h3>
                            <p className='text-[24px] font-semibold'>+996 700-72-77-45</p>
                        </Container>
                    </div>
                </div>
                <div className='relative'>
                    <div
                        className="w-full h-[470px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${BannerImg})` }}
                    >
                    </div>
                    <div className='absolute top-[0] w-full h-[470px] text-white pt-[96px]' style={{ backgroundImage: `url(${modal})` }}>
                        <Container>
                            <h1 className=' text-[48px] font-semibold w-[400px]'>Электромобили в Нарын</h1>
                            <h3 className='bg-[#01060E96] mt-[40px] text-[27px] pl-[18px] pr-[18px] pt-[30px] pb-[30px] w-[410px] rounded-2xl'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h3>
                            <p className='text-[24px] font-semibold'>+996 700-72-77-45</p>
                        </Container>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default AllBaner;
