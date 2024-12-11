import React, {useState} from 'react';
import BasicInput from '../inputs/Basic_input';
import ContinueButton from '../buttons/Continue_button';
import { useRecoilState } from 'recoil';
import { routerState } from '../../atoms/Router_atom';

interface RegisterCardProps {
  switchView: () => void;
}

const RegisterCard: React.FC<RegisterCardProps> = ({switchView}) => {

  const [session, setSession] = useRecoilState<boolean>(routerState);
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const changeMailValue = (e: any) => {
    setMail(e?.target.value);
  };

  const changePasswordValue = (e: any) => {
    setPassword(e?.target.value);
  };

  const changeCodeValue = (e: any) => {
    setCode(e?.target.value);
  };

  const registerActionButton = () => {
    if (mail === 'kasper.borecki05@gmail.com' && password === 'Test123!') {
      setSession(!session);
    }
  };

  return (
    <div className='h-1/2 w-1/2 bg-[#FFF] rounded-3xl px-8 py-8'>
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
      <p className='text-2xl text-[#000000DD] pt-4 pb-1'>Company Access Code</p>
      <BasicInput
        hintText='Access Code'
        changeControlerValue={changeCodeValue}
        type='text'
      />
      <ContinueButton buttonAction={registerActionButton} />
      <div className='flex my-6'>
        <hr className='h-[3px] mt-6 mb-4 bg-[#00000028] w-[50%]' />
        <p className='mt-[13px] font-medium'>OR</p>
        <hr className='h-[3px] mt-6 mb-4 bg-[#00000028] w-[50%]' />
      </div>
      <div className='place-items-center'>
        <p
          className='underline font-medium text-[#000000DD]'
          onClick={switchView}>
          Login to existing account
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
