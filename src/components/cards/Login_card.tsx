import React from 'react';
import BasicInput from '../inputs/Basic_input';
import ContinueButton from '../buttons/Continue_button';

interface LoginCardProps {
  switchView: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({
  switchView,
}) => {
  return (
    <div className='h-1/3 w-1/2 bg-[#FFF] rounded-3xl px-8 py-4'>
      <p className='text-2xl font-medium text-[#000000BB] pt-4 pb-1'>Email</p>
      <BasicInput hintText='Email' />
      <p className='text-2xl font-medium text-[#000000BB] pt-4 pb-1'>Password</p>
      <BasicInput hintText='Password' />
      <ContinueButton />
      <div className='flex'>
        <hr className='h-[3px] mt-6 mb-4 bg-[#00000028] w-[50%]' />
        <p className='mt-[13px] font-medium'>OR</p>
        <hr className='h-[3px] mt-6 mb-4 bg-[#00000028] w-[50%]' />
      </div>
      <div className='place-items-center'>
        <p className='underline font-medium text-[#000000DD]' onClick={switchView} >Register new account</p>
      </div>
    </div>
  );
};

export default LoginCard;
