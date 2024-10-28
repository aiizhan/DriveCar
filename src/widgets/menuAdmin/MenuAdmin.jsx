import menu from '../../shared/assets/img/menuAdmin.png';
import banerAdmin from '../../shared/assets/img/menuBaneradmin.png';
import logoMenu from '../../shared/assets/svg/logomenuadmin.svg';
import setLogo from '../../shared/assets/svg/settingsLogo.svg';
import dollar from '../../shared/assets/svg/dollar-square.svg';
import group1 from '../../shared/assets/svg/Group.svg';
import content from '../../shared/assets/svg/fluent_content-view-16-regular.svg';
import line from '../../shared/assets/svg/login-circle-line.svg';

const MenuItem = ({ icon, label }) => {
    return (
        <div className="flex w-[200px] cursor-pointer items-center border border-white rounded-[8px] pt-[8px] p-[20px] pb-[8px] mb-[30px] gap-[10px]">
            <img src={icon} alt={label} />
            {label}
        </div>
    );
};

const MenuAdmin = () => {
    return (
        <div className="w-[265px] ">
            <div className="relative w-[265px] h-[971px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${banerAdmin})` }}>
                <div className="absolute w-full h-full bg-[url('../../shared/assets/img/menuAdmin.png')] bg-no-repeat bg-cover">
                    <div className="flex justify-center">
                        <img src={logoMenu} alt="Логотип меню" />
                    </div>

                    <div className="text-white ml-[35px] mt-[70px]">
                        <MenuItem icon={setLogo} label="Сводка" />
                        <MenuItem icon={dollar} label="Мои машины" />
                        <MenuItem icon={group1} label="Объявления" />
                        <MenuItem icon={content} label="Контент" />
                        <div className="absolute rounded-[8px] mt-[424px] flex p-[8px] items-center gap-[10px] w-[198px] h-[36px] border border-white">
                            <img src={line} alt="Выйти" />
                            Выйти
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuAdmin;