import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Car1 from '../../shared/assets/svg/Car1.svg';
import Car2 from '../../shared/assets/svg/Car2.svg';
import message from '../../shared/assets/img/message.png'
import eye from '../../shared/assets/img/eye.png'
import Container from '../../shared/helpers/Container';

const cars = [
  { id: 1, name: 'Car1', image: Car1 },
  { id: 2, name: 'Car2', image: Car2 },
  { id: 3, name: 'Car3', image: Car1 },
  { id: 4, name: 'Car4', image: Car2 },
  { id: 5, name: 'Car5', image: Car1 },
  { id: 6, name: 'Car6', image: Car2 },
  { id: 7, name: 'Car7', image: Car1 },
  { id: 8, name: 'Car8', image: Car2 },
  { id: 9, name: 'Car9', image: Car1 },
  { id: 10, name: 'Car10', image: Car2 },
];

const carInfo = {
  'Кузов': 'Седан',
  'Двигатель': 'Электронный',
  'Коробка передач': 'Типтроник',
  'Руль': 'Слева',
  'Пробег': '1350000 км',
  'Цвет': 'Серый',
  'Объем': 'Серый',
  'Состояние': 'Б/у',
};

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1, color: 'white' }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InfoCar() {
  const [value, setValue] = useState(0);
  const [image, setImage] = useState(cars[0]?.image || '');
  const [selectedCarId, setSelectedCarId] = useState(cars[0]?.id || null); // Для отслеживания выбранной машины

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCarClick = (car) => {
    setImage(car.image);
    setSelectedCarId(car.id); // Обновляем ID выбранной машины
  };

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 4, borderColor: 'blue' }}>
          <Tabs 
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { background: 'blue' },
            }}
          >
            <Tab
              label="Описание"
              {...a11yProps(0)}
              sx={{
                color: 'white',
                backgroundColor: value === 0 ? 'blue' : 'transparent',
                borderRadius: '8px 8px 0 0',
                '&.Mui-selected': {
                  backgroundColor: 'blue',
                  color: 'white',
                  margin: '0 20px',
                  fontSize: '16px'
                },
                minWidth: 100,
                padding: '8px 16px',
              }}
            />
            <Tab
              label="Характеристика"
              {...a11yProps(1)}
              sx={{
                color: 'white',
                backgroundColor: value === 1 ? 'blue' : 'transparent',
                borderRadius: '8px 8px 0 0',
                '&.Mui-selected': {
                  backgroundColor: 'blue',
                  color: 'white',
                  fontSize: '16px'
                },
                minWidth: 100,
                padding: '8px 16px',
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="flex mt-20">
            <h1 className="absolute mt-[-60px] text-[#FFF] text-3xl">Audi 2016 года за ~ 175,900 сом</h1>
            <div className="w-[522px] h-[684px]">
              <h1 className="text-3xl text-white mt-8 ml-[16px] absolute">Audi</h1>
              <div className="bg-gradient-to-tr from-black via-gray-700 to-black rounded-[20px] w-full h-[600px]">
                <img src={image} alt="Selected car" className="w-full h-full object-contain" />
              </div>
              <div className="flex gap-1 flex-wrap mt-4">
                {cars.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.name}
                    className={`w-[100px] h-[44px] cursor-pointer rounded ${
                      selectedCarId === item.id ? 'border-2 border-white' : ''
                    }`}
                    onClick={() => handleCarClick(item)}
                  />
                ))}
              </div>
            </div>

            {/* Блок с характеристиками справа */}
            <div className=" border-gray-700 rounded-lg p-4 ml-8 w-[400px] h-[380px]">
              <table className="w-full text-white">
                <tbody>
                  {Object.entries(carInfo).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-700">
                      <td className="py-2 px-4 font-semibold text-gray-300">{key}</td>
                      <td className="py-2 px-4 text-start w-[150px]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className=' w-[570px] h-[264px] mt-10'>
                <p>Компания SILK ROAD AUTO занимается подбором и доставкой автомобилей из России и США! <br />
                  ЦЕНА НА АВТО УКАЗАНА С УЧЁТОМ ВСЕХ РАСХОДОВ!
                </p>
                <br />
                <p>За 16 лет работы в Кыргызстане мы детально изучили все нюансы подбора и доставки автомобилей из России! Сотрудничаем с проверенными дилерами (т.е. низкие комиссии). В Кыргызстане мы работаем без посредников и гарантируем полную прозрачность всех этапов сделки! <br />
                  Экспорт происходит в течении 14 дней с России и 90 дней с США. <br /> Доставляем авто с любого региона России до Бишкека!
                </p>
              </div>
            </div>
          </div>
        </CustomTabPanel> 
        <CustomTabPanel value={value} index={1}> 
          <Container>
            <div className="flex items-start space-x-6 mt-10">
              <div className="w-[305px] h-[335px] bg-gradient-to-b from-[#111214] to-gray-700 rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center">
                <h1 className="text-white text-3xl font-semibold absolute mt-[-230px] ml-[-200px]">Audi</h1>
                <img src={Car1} alt="Audi" className="w-full h-auto object-contain" />
              </div>
              <div className="ml-4">
                <table className="w-full text-white">
                     <tbody>
                        <tr className="border-b border-[#000000]">
                          <td className="py-2 px-4 font-semibold text-gray-300">Характеристика:</td>
                          <td className="py-2 px-4">Характеристика автомобиля Audi А8 2016</td>
                        </tr>
                        <tr className="border-b border-[#000000]">
                          <td className="py-2 px-4 font-semibold text-gray-300">Марка:</td>
                          <td className="py-2 px-4">Audi</td>
                        </tr>
                        <tr className="border-b border-[#000000]">
                          <td className="py-2 px-4 font-semibold text-gray-300">Модель:</td>
                          <td className="py-2 px-4">A4</td>
                        </tr>
                        <tr className="border-b border-[#000000]">
                          <td className="py-2 px-4 font-semibold text-gray-300">Год выпуска:</td>
                          <td className="py-2 px-4">2016</td>
                        </tr>
                        <tr className="border-b border-[#000000]">
                          <td className="py-2 px-4 font-semibold text-gray-300">Цена:</td>
                          <td className="py-2 px-4">175,900 сом</td>
                        </tr>
                      </tbody>
                </table>
                <div className='w-[260px] flex justify-between items-center gap-3 mt-[100px]'>
                  <div className=' w-[88px] flex justify-center items-center gap-3'>
                    <img className=' w-[32px] h-[32px]' src={eye} alt="" />
                    <p className=' text-xl'>234</p>
                  </div>
                  <div className=' w-[88px] flex justify-center items-center gap-3 '>
                    <img className=' w-[32px] h-[32px]' src={message} alt="" />
                    <p className=' text-xl'>0</p>
                  </div>
                </div>
              </div>
            </div>               
          </Container>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
