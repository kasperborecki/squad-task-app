import React, {useState} from 'react';
import BasicInput from '../inputs/Basic_input';
import ContinueButton from '../buttons/Continue_button';
import {useRecoilState} from 'recoil';
import {routerState} from '../../atoms/Router_atom';

interface LoginCardProps {
  switchView: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({switchView}) => {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [session, setSession] = useRecoilState<boolean>(routerState);

  const changeMailValue = (e: any) => {
    setMail(e?.target.value);
  };

  const changePasswordValue = (e: any) => {
    setPassword(e?.target.value);
  };

  const loginActionButton = () => {
    if (mail === 'kasper.borecki05@gmail.com' && password === 'Test123!') {
      setSession(!session);
    }
  };

  return (
    <div className='h-1/3 w-1/2 bg-[#FFF] rounded-3xl px-8 py-4'>
      <p className='text-2xl font-medium text-[#000000BB] pt-4 pb-1'>Email</p>
      <BasicInput
        hintText='Email'
        changeControlerValue={changeMailValue}
        type='email'
      />
      <p className='text-2xl font-medium text-[#000000BB] pt-4 pb-1'>
        Password
      </p>
      <BasicInput
        hintText='Password'
        changeControlerValue={changePasswordValue}
        type='password'
      />
      <ContinueButton buttonAction={loginActionButton}/>
      <div className='flex'>
        <hr className='h-[3px] mt-6 mb-4 bg-[#00000028] w-[50%]' />
        <p className='mt-[13px] font-medium'>OR</p>
        <hr className='h-[3px] mt-6 mb-4 bg-[#00000028] w-[50%]' />
      </div>
      <div className='place-items-center'>
        <p
          className='underline font-medium text-[#000000DD]'
          onClick={switchView}>
          Register new account
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
