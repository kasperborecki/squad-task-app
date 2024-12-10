import {useState} from 'react';
import LoginCard from '../components/cards/Login_card';
import RegisterCard from '../components/cards/Register_card';
import AuthImage from '../assets/AuthImage.png';
import Logo from '../assets/Logo.png';

function AuthenticationView() {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  const switchAuthCards = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <div className='flex'>
      <div className='h-screen w-1/2 bg-[#EEF3EE] place-content-center justify-items-center'>
        <img
          src={AuthImage}
          alt='authImage'
          className='ml-40'
        />
      </div>
      <div className='h-screen w-1/2 place-content-center justify-items-center bg-[#EEF3EE]'>
        <img
          src={Logo}
          alt='logo'
          className='h-36 w-36 mb-10 -mt-20'
        />

        {hasAccount ? (
          <LoginCard switchView={switchAuthCards} />
        ) : (
          <RegisterCard switchView={switchAuthCards} />
        )}
      </div>
    </div>
  );
}

export default AuthenticationView;
