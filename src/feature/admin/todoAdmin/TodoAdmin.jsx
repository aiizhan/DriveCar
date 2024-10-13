// import React from 'react';
// import car from '../../../shared/assets/img/Card2.png';
// import deleteCard from '../../../shared/assets/svg/deleteCard.svg'
// import editCard from '../../../shared/assets/svg/editCard.svg'

// const TodoAdmin = () => {
//     return (
//         <div className='max-w-[996px] max-h-[859px] ml-[70px] mt-[40px]'>
//             <div className='bg-[#0C192E7A] w-[100%] h-[100%] text-white p-[15px] rounded-[10px] overflow-y-scroll'>
//                 <div className='flex justify-between border-b-2'>
//                     <h2 className='mb-[25px]'>Мои машины</h2>
//                     <button className='bg-[#306AD9] w-[204px] h-[40px] rounded-[8px]'>+ Добавить</button>
//                 </div>
//                 <div className='border-b-2 flex justify-around mt-[22px] '>
//                     <h3 className='mb-[10px]'>Фото</h3>
//                     <h3>Марка</h3>
//                     <h3>Модель</h3>
//                     <h3>Цена</h3>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//                 <div className='border-b-2 flex mt-[30px] justify-between items-center'>
//                     <div style={{border: '1px solid white', borderRadius: 10, marginBottom: 14}}>
//                         <img className='w-[180px] ' src={car} alt="" />    
//                     </div>
//                     <h3>Audi</h3>
//                     <h3>A8</h3>
//                     <h3>$175, 900</h3>
//                     <div className='flex'>
//                         <img className='w-[18px] ' src={deleteCard} alt="" />
//                         <div style={{border: '1px solid white', margin: 6, height: 25}}></div>
//                         <img className='w-[18px]' src={editCard} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TodoAdmin



import React from 'react';
import car from '../../../shared/assets/img/Card2.png';
import deleteCard from '../../../shared/assets/svg/deleteCard.svg';
import editCard from '../../../shared/assets/svg/editCard.svg';
import './TodoAdmin.css'

const TodoAdmin = () => {
    return (
        <div className='max-w-[996px] ml-[70px] mt-[40px]'>
            <div className='bg-[#0C192E7A] w-full max-h-[859px] text-white p-[15px] rounded-[10px] overflow-y-auto scrollbar-hidden'>
                <div className='flex justify-between border-b-2 pb-2'>
                    <h2 className='mb-[25px] text-2xl font-bold'>Мои машины</h2>
                    <button className='bg-[#306AD9] w-[204px] h-[40px] rounded-[8px]'>+ Добавить</button>
                </div>
                <div className='border-b-2 flex justify-around mt-[22px]'>
                    <h3 className='mb-[10px]'>Фото</h3>
                    <h3>Марка</h3>
                    <h3>Модель</h3>
                    <h3>Цена</h3>
                </div>
                {/* Повторяющийся блок для машин */}
                {[...Array(20)].map((_, index) => (
                    <div key={index} className='border-b-2 flex mt-[30px] justify-between items-center'>
                        <div style={{ border: '1px solid white', borderRadius: 10, marginBottom: 14 }}>
                            <img className='w-[180px]' src={car} alt="Car" />
                        </div>
                        <h3>Audi</h3>
                        <h3>A8</h3>
                        <h3>$175,900</h3>
                        <div className='flex'>
                            <img className='w-[18px]' src={deleteCard} alt="Delete" />
                            <div style={{ border: '1px solid white', margin: 6, height: 25 }}></div>
                            <img className='w-[18px]' src={editCard} alt="Edit" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoAdmin;
