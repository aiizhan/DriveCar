import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../headerAdmin/HeaderAdmin';
import MenuAdmin from '../menuAdmin/MenuAdmin';
import AdminContainer from '../../shared/helpers/AdminContainer';

export const AdminLayout = () => {
    return (
       
            <div className="flex text-white">
                <MenuAdmin /> {/* Теперь меню слева */}
                <div className="flex flex-col gap-[38px] flex-grow"> {/* flex-grow для заполнения оставшегося пространства */}
                    <HeaderAdmin />
                    <Outlet />
                </div>
            </div>
       
    );
};
