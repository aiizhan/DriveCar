import search from '../../shared/assets/svg/searchAdmin.svg';
import profil from '../../shared/assets/svg/profileAdmin.svg';

const HeaderAdmin = () => {
    return (
        <div className='flex mt-[30px] ml-[30px]'> {/* Изменён отступ для лучшего выравнивания */}
            <div className='relative'>
                <img className='absolute ml-[22px] mt-[10px]' src={search} alt="Поиск" />
                <input
                    className='bg-[#0B111C82] w-[677px] h-[42px] pl-[60px] rounded-[30px] text-white border border-white'
                    type="text"
                    placeholder='Поиск'
                />
            </div>
            <div className='flex items-center h-[53px] text-white ml-[111px] gap-[9px]'>
                <p className='text-xl'>Администратор</p>
                <img src={profil} alt="Профиль" />
            </div>
        </div>
    );
};

export default HeaderAdmin;