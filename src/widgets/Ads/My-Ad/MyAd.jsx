import React, { useState } from 'react';
import BurgerMb from "../Assets/imagePorshe.png"
import Logo from "../Assets/Logo.svg"
import Setting from '../Assets/hugeicons_settings-01.svg'
import Dollar from '../Assets/dollar-square.svg'
import Content from '../Assets/fluent_content-view-16-regular.svg'
import Ad from '../Assets/Group.svg'
import Exit from '../Assets/Exit.svg'
import Profile from "../Assets/iconamoon_profile-circle-thin.svg"
import Search from "../Assets/Search.svg"
import BgSportCar from "../Assets/imageSportCar.png"
import Telegram from '../Assets/la_telegram.svg'
import FaceBook from '../Assets/ri_facebook-fill.svg'
import Instagram from '../Assets/ri_instagram-line.svg'
import Twiter from '../Assets/ri_twitter-line.svg'
import Edit from "../Assets/ri_edit-fill.svg"
import Delete from "../Assets/ic_baseline-delete.svg"
import BgBmw from "../Assets/imageBmw.png"
import LogoImage from "../Assets/logo-image.svg"
function MyAd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className='MenuBurger ml-[30px]'>
        <img className='w-[265px] h-[971px]' src={BurgerMb} alt="" />
        <div>
          <img className='absolute mt-[-950px] ml-[90px]' src={Logo} alt="" />
          {/* 1 */}
          <div className='border border-white rounded-lg w-[215px] h-[40px] flex flex-row justify-start gap-[16px] p-2 mt-[-770px] absolute ml-[20px]'><img src={Setting} alt="" /><h2 className='text-white'>Сводка</h2></div>
          {/* 2 */}
          <div className='border border-white rounded-lg w-[215px] h-[40px] flex flex-row justify-start gap-[16px] p-2 mt-[-700px] absolute ml-[20px]'><img src={Dollar} alt="" /><h2 className='text-white'>Мои машины</h2></div>
          {/* 3 */}
          <div className='border border-white rounded-lg w-[215px] h-[40px] flex flex-row bg-white justify-start gap-[16px] p-2 mt-[-630px] absolute ml-[20px]'><img src={Ad} alt="" /><h2 className='text-black'>Объявления </h2></div>
          {/* 4 */}
          <div className='border border-white rounded-lg w-[215px] h-[40px] flex flex-row justify-start gap-[16px] p-2 mt-[-550px] absolute ml-[20px]'><img src={Content} alt="" /><h2 className='text-white'>Контент</h2></div>
          {/* 5 */}
          <div className='border border-white rounded-lg w-[215px] h-[40px] flex flex-row justify-start gap-[16px] p-2 mt-[-100px] absolute ml-[20px]'><img src={Exit} alt="" /><h2 className='text-white'>Выйти</h2></div>
        </div>
      </div>
      <div className='Header'>
        <div className='ml-[400px] mt-[-950px]'>
          <img className='ml-[630px] mt-[8px] absolute' src={Search} alt="" />
          <input type="text" className='w-[677px] h-[42px] box-border border border-white rounded-[30px] bg-gray-950 text-white' placeholder='Поиск'/>
        </div>
        <div className='ml-[1400px] mt-[-35px]'>
          <h2 className='text-white ml-[-90px] mt-[-20px]'>Администратор</h2>
          <img className='ml-[50px] mt-[-35px]' src={Profile} alt="" />
        </div>
      </div>
      <div className='MyAd w-[996px] h-[1924px] bg-gray-950 rounded-xl ml-[380px] mt-[30px]'>
        <div className='flex absolute'>
          <h2 className='ml-[50px] mt-[50px] w-64 h-9 text-white text-2xl font-bold leading-9 '>Мои обьявлении</h2>
          <button className='w-52 text-white h-10 ml-[412px] flex justify-center items-center bg-[rgb(48,106,217)] rounded-lg mt-[45px]' onClick={toggleModal}>+ Добавить</button>
        </div>
        <div className=''>
          {/* 1 */}
          <div className='mt-[150px] absolute ml-[48px]'>
            <div>
              <img className='w-[685px] h-[262px]' src={BgSportCar} alt="" />
              <h2 className='text-white text-xl font-semibold leading-8 tracking-wide mt-[-210px] ml-[50px]'>Выбери свой <br /> автомобиль</h2>
              <h4 className='text-[#FCFCFC] ml-[50px] mt-5 text-base leading-[1.092] tracking-normal'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h4>
              <div className=''>
                <button className='box-border border border-[#D9D9D9] rounded-[26.5px] bg-transparent gap-[6.625] p-[14.57px_22.52px] text-white mt-5 ml-[50px]'>Получить консультацию</button>
                <div className='flex ml-[400px] mt-[-50px]'>
                  <img className='m-1' src={Telegram} alt="" />
                  <img className='m-1' src={FaceBook} alt="" />
                  <img className='m-1' src={Instagram} alt="" />
                  <img className='m-1' src={Twiter} alt="" />
                </div>
              </div>
            </div>
            <div className='flex ml-[800px] mt-[-100px]'>
              <img src={Delete} alt=""  className='m-3'/>
              <div  className='w-[12px] h-[50px] text-white absolute ml-[40px] mt-3'>|</div>
              <img src={Edit} alt="" className='m-3'/>
            </div>
          </div>
          {/* 2 */}
          <div className='mt-[450px] absolute ml-[48px]'>
            <div>
              <img className='w-[685px] h-[262px]' src={BgSportCar} alt="" />
              <h2 className='text-white text-xl font-semibold leading-8 tracking-wide mt-[-210px] ml-[50px]'>Выбери свой <br /> автомобиль</h2>
              <h4 className='text-[#FCFCFC] ml-[50px] mt-5 text-base leading-[1.092] tracking-normal'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h4>
              <div className=''>
                <button className='box-border border border-[#D9D9D9] rounded-[26.5px] bg-transparent gap-[6.625] p-[14.57px_22.52px] text-white mt-5 ml-[50px]'>Получить консультацию</button>
                <div className='flex ml-[400px] mt-[-50px]'>
                  <img className='m-1' src={Telegram} alt="" />
                  <img className='m-1' src={FaceBook} alt="" />
                  <img className='m-1' src={Instagram} alt="" />
                  <img className='m-1' src={Twiter} alt="" />
                </div>
              </div>
            </div>
            <div className='flex ml-[800px] mt-[-100px]'>
              <img src={Delete} alt=""  className='m-3'/>
              <div  className='w-[12px] h-[50px] text-white absolute ml-[40px] mt-3'>|</div>
              <img src={Edit} alt="" className='m-3'/>
            </div>
          </div>
          {/* 3 */}
          <div className='mt-[750px] absolute ml-[48px]'>
            <div>
              <img className='w-[685px] h-[262px]' src={BgBmw} alt="" />
              <h2 className='text-white text-xl font-semibold leading-8 tracking-wide mt-[-210px] ml-[50px]'>Выбери свой <br /> автомобиль</h2>
              <h4 className='text-[#FCFCFC] ml-[50px] mt-5 text-base leading-[1.092] tracking-normal'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h4>
              <div className=''>
                <button className='box-border border border-[#D9D9D9] rounded-[26.5px] bg-transparent gap-[6.625] p-[14.57px_22.52px] text-white mt-5 ml-[50px]'>Получить консультацию</button>
                <div className='flex ml-[400px] mt-[-50px]'>
                  <img className='m-1' src={Telegram} alt="" />
                  <img className='m-1' src={FaceBook} alt="" />
                  <img className='m-1' src={Instagram} alt="" />
                  <img className='m-1' src={Twiter} alt="" />
                </div>
              </div>
            </div>
            <div className='flex ml-[800px] mt-[-100px]'>
              <img src={Delete} alt=""  className='m-3'/>
              <div  className='w-[12px] h-[50px] text-white absolute ml-[40px] mt-3'>|</div>
              <img src={Edit} alt="" className='m-3'/>
            </div>
          </div>
          {/* 4 */}
          <div className='mt-[1050px] absolute ml-[48px]'>
            <div>
              <img className='w-[685px] h-[262px]' src={BgBmw} alt="" />
              <h2 className='text-white text-xl font-semibold leading-8 tracking-wide mt-[-210px] ml-[50px]'>Выбери свой <br /> автомобиль</h2>
              <h4 className='text-[#FCFCFC] ml-[50px] mt-5 text-base leading-[1.092] tracking-normal'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h4>
              <div className=''>
                <button className='box-border border border-[#D9D9D9] rounded-[26.5px] bg-transparent gap-[6.625] p-[14.57px_22.52px] text-white mt-5 ml-[50px]'>Получить консультацию</button>
                <div className='flex ml-[400px] mt-[-50px]'>
                  <img className='m-1' src={Telegram} alt="" />
                  <img className='m-1' src={FaceBook} alt="" />
                  <img className='m-1' src={Instagram} alt="" />
                  <img className='m-1' src={Twiter} alt="" />
                </div>
              </div>
            </div>
            <div className='flex ml-[800px] mt-[-100px]'>
              <img src={Delete} alt=""  className='m-3'/>
              <div  className='w-[12px] h-[50px] text-white absolute ml-[40px] mt-3'>|</div>
              <img src={Edit} alt="" className='m-3'/>
            </div>
          </div>
          {/* 5 */}
          <div className='mt-[1350px] absolute ml-[48px]'>
            <div>
              <img className='w-[685px] h-[262px]' src={BgBmw} alt="" />
              <h2 className='text-white text-xl font-semibold leading-8 tracking-wide mt-[-210px] ml-[50px]'>Выбери свой <br /> автомобиль</h2>
              <h4 className='text-[#FCFCFC] ml-[50px] mt-5 text-base leading-[1.092] tracking-normal'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h4>
              <div className=''>
                <button className='box-border border border-[#D9D9D9] rounded-[26.5px] bg-transparent gap-[6.625] p-[14.57px_22.52px] text-white mt-5 ml-[50px]'>Получить консультацию</button>
                <div className='flex ml-[400px] mt-[-50px]'>
                  <img className='m-1' src={Telegram} alt="" />
                  <img className='m-1' src={FaceBook} alt="" />
                  <img className='m-1' src={Instagram} alt="" />
                  <img className='m-1' src={Twiter} alt="" />
                </div>
              </div>
            </div>
            <div className='flex ml-[800px] mt-[-100px]'>
              <img src={Delete} alt=""  className='m-3'/>
              <div  className='w-[12px] h-[50px] text-white absolute ml-[40px] mt-3'>|</div>
              <img src={Edit} alt="" className='m-3'/>
            </div>
          </div>
          {/* 6 */}
          <div className='mt-[1650px] absolute ml-[48px]'>
            <div>
              <img className='w-[685px] h-[262px]' src={BgBmw} alt="" />
              <h2 className='text-white text-xl font-semibold leading-8 tracking-wide mt-[-210px] ml-[50px]'>Выбери свой <br /> автомобиль</h2>
              <h4 className='text-[#FCFCFC] ml-[50px] mt-5 text-base leading-[1.092] tracking-normal'>РАССРОЧКА 6/9/12 МЕСЯЦЕВ</h4>
              <div className=''>
                <button className='box-border border border-[#D9D9D9] rounded-[26.5px] bg-transparent gap-[6.625] p-[14.57px_22.52px] text-white mt-5 ml-[50px]'>Получить консультацию</button>
                <div className='flex ml-[400px] mt-[-50px]'>
                  <img className='m-1' src={Telegram} alt="" />
                  <img className='m-1' src={FaceBook} alt="" />
                  <img className='m-1' src={Instagram} alt="" />
                  <img className='m-1' src={Twiter} alt="" />
                </div>
              </div>
            </div>
            <div className='flex ml-[800px] mt-[-100px]'>
              <img src={Delete} alt=""  className='m-3'/>
              <div  className='w-[12px] h-[50px] text-white absolute ml-[40px] mt-3'>|</div>
              <img src={Edit} alt="" className='m-3'/>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
          <div className="w-[849px] h-[905px] bg-gray-900 rounded-md mx-auto mt-8 mt-[-2000px] absolute ml-[400px] ">
          <div className="bg-blue-800 rounded-md h-[83px]">
            <h1 className="text-center text-white text-2xl font-semibold py-6 ">Добавить объявление</h1>
          </div>
          <div className="flex justify-between items-center mx-12 mt-12">
            <h2 className="text-white text-2xl font-semibold ml-[100px]">Заголовок</h2>
            <div className="border border-gray-300 rounded-md w-[355px] h-[225px] bg-gray-800 flex items-center justify-center">
              <img src={LogoImage} alt="Logo" className="object-contain" />
            </div>
          </div>
          <hr className="border-t border-gray-600 mx-12 my-4" />
          <div className="mx-12">
            <h1 className="text-white text-xl font-semibold mt-10">Добавить обзор активности</h1>
            <div className="flex justify-between mt-12">
              <div className="flex flex-col">
                <input type="text" placeholder="Заголовок" className="border border-gray-300 rounded-md p-2 mb-2 bg-gray-800 text-white w-[345px] h-[50px]" />
                <textarea placeholder="Описание" className="border border-gray-300 rounded-md p-2 mb-2 bg-gray-800 text-white h-24" />
                
                <input type="text" placeholder="Рассрочка 6\9\12 месяцев" className="border border-gray-300 rounded-md p-2 bg-gray-800 text-gray-400" />
              </div>
              <div className="bg-gray-800 border border-gray-300 rounded-md p-4 ml-[50px]">
                <button className="bg-blue-600 rounded-full px-6 py-2 text-white ml-5 mt-10">Загрузите изображение</button>
                <h3 className="text-white text-sm mt-2">
                  Допустимые форматы : PNG, GIF, WEBP, <br /> MP3, and MP4
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-12 mt-12">
            <button className="rounded-md bg-blue-800 text-white px-6 py-3">Назад</button>
            <button className="rounded-md bg-blue-600 text-white px-6 py-3">Сохранить и опубликовать</button>
          </div>
        </div>
        )}
    </div>
  )
}

export default MyAd
