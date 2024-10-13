import search from '../../../shared/assets/svg/searchAdmin.svg'
import profil from '../../../shared/assets/svg/profileAdmin.svg'

const HeaderAdmin = () => {
    return (
        <div className='flex mt-[30px] ml-[90px]'>
            <div>
                <img className='absolute ml-[22px] mt-[10px]' src={search} alt="" />
                <input style={{ border: '1px solid white' }} className='relative bg-[#0B111C82] w-[677px] h-[42px] pl-[60px] rounded-[30px] text-white' type="text" placeholder='Поиск' />
            </div>
            <div className='flex h-[53px] text-white  ml-[111px] gap-[9px]'>
                <p className='text-x5'>Администратор</p>
                <img src={profil} alt="" />
            </div>
        </div>
    )
}

export default HeaderAdmin