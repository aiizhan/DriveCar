import menu from '../../../shared//assets/img/menuAdmin.png'
import banerAdmin from '../../../shared/assets/img/menuBaneradmin.png'
import logoMenu from '../../../shared/assets/svg/logomenuadmin.svg'
import setLogo from '../../../shared/assets/svg/settingsLogo.svg'
import dollar from '../../../shared/assets/svg/dollar-square.svg'
import group1 from '../../../shared/assets/svg/Group.svg'
import content from '../../../shared/assets/svg/fluent_content-view-16-regular.svg'
import line from '../../../shared/assets/svg/login-circle-line.svg'

const MenuAdmin = () => {
    return (
        <div style={{ width: 265, marginLeft: 50}}>
            <div className=" w-[265px] h-[971px]">
                <div className='absolute '>
                    <img src={menu} alt="" />
                </div>
                <div className='absolute '>
                    <img src={banerAdmin} alt="" />
                </div>
                <div className='relative flex justify-center'>
                    <img src={logoMenu} alt="" />
                </div>

                <div className=' absolute text-white ml-[35px] mt-[70px]'>
                    <div style={{ border: '1px solid white' }} className='flex items-center rounded-[8px] pt-[8px] p-[20px] pb-[8px] mb-[30px] gap-[10px]'>
                        <img src={setLogo} alt="" />
                        Сводка
                    </div>
                    <div style={{ border: '1px solid white' }} className='flex items-center rounded-[8px] pt-[8px] p-[20px] pb-[8px] mb-[30px] gap-[10px]'>
                        <img src={dollar} alt="" />
                        Мои машины
                    </div>
                    <div style={{ border: '1px solid white' }} className='flex items-center rounded-[8px] pt-[8px] p-[20px] pb-[8px] mb-[30px] gap-[10px]'>
                        <img src={group1} alt="" />
                        Объявления 
                    </div>
                    <div style={{ border: '1px solid white' }} className='flex items-center rounded-[8px] pt-[8px] p-[20px] pb-[8px]  gap-[10px]'>
                        <img src={content} alt="" />
                        Контент
                    </div>
                    <div style={{border: '1px solid white'}} className='absolute rounded-[8px] mt-[424px] flex p-[8px] items-center gap-[10px] w-[198px] h-[36px]'>
                        <img src={line} alt="" />
                        Выйти
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuAdmin;