import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { TbLayoutDashboard } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

const DefaultDrawer = () => {

    const [chosenTab, setChosenTab] = useState<number>(1);

    const changeTab = (selectedTab: number) => {
        setChosenTab(selectedTab);
    };

  return (
    <div className='bg-[#FFF] w-[90%] h-[90%] rounded-3xl relative'>
      <div className='h-1/12 px-16 py-8 flex'>
        <img
          src={Logo}
          alt='logo'
          className='h-16'
        />
        <p className='font-medium text-3xl p-3 text-[#000000BB]'>Squad App</p>
      </div>
      <div className={`flex h-1/12 ${chosenTab == 1 ? 'bg-gradient-to-r from-[#4446e915] to-[#4446e900] border-l-8 border-l-[#4446e9] pl-4 pr-6 py-6' : 'bg-[#fff] p-6' }`} onClick={() => changeTab(1)}>
        <TbLayoutDashboard className='h-8 w-8 mr-4 text-[#000000BB]'/>
        <p className='font-medium text-2xl text-[#000000BB]'>Dashboard</p>
      </div>
      <div className={`flex h-1/12 ${chosenTab == 2 ? 'bg-gradient-to-r from-[#4446e915] to-[#4446e900] border-l-8 border-l-[#4446e9] pl-4 pr-6 py-6' : 'bg-[#fff] p-6' }`} onClick={() => changeTab(2)}>
        <FaTasks className='h-7 w-7 mt-1 mr-4 text-[#000000BB]'/>
        <p className='font-medium text-2xl text-[#000000BB]'>My Tasks</p>
      </div>
      <div className={`flex h-1/12 ${chosenTab == 3 ? 'bg-gradient-to-r from-[#4446e915] to-[#4446e900] border-l-8 border-l-[#4446e9] pl-4 pr-6 py-6' : 'bg-[#fff] p-6' }`} onClick={() => changeTab(3)}>
        <IoMdTimer className='h-8 w-8  mr-4 text-[#000000BB]'/>
        <p className='font-medium text-2xl text-[#000000BB]'>Track Time</p>
      </div>
      <div className={`flex h-1/12  ${chosenTab == 4 ? 'bg-gradient-to-r from-[#4446e915] to-[#4446e900] border-l-8 border-l-[#4446e9] pl-4 pr-6 py-6' : 'bg-[#fff] p-6' }`} onClick={() => changeTab(4)}>
        <MdNotificationsActive className='h-8 w-8  mr-4 text-[#000000BB]'/>
        <p className='font-medium text-2xl text-[#000000BB]'>Notifications</p>
      </div>
      <div className='absolute bottom-0'>
        <div className={`flex h-1/12 ${chosenTab == 5 ? 'bg-gradient-to-r from-[#4446e915] to-[#4446e900] border-l-8 border-l-[#4446e9] pl-4 pr-6 py-6' : 'bg-[#fff] p-6' }`} onClick={() => changeTab(5)}>
          <LuSettings2 className='h-8 w-8  mr-4 text-[#000000BB]'/>
          <p className='font-medium text-2xl text-[#000000BB]'>Settings</p>
        </div>
        <div className='flex h-1/12 p-6'>
          <FiLogOut  className='h-8 w-8  mr-4 text-[#000000BB]'/>
          <p className='font-medium text-2xl text-[#000000BB]'>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultDrawer;
