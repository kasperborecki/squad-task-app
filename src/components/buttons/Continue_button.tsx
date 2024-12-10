import {FaLongArrowAltRight} from 'react-icons/fa';

const ContinueButton = () => {
  return (
    <button className='w-full h-10 bg-[#4446e9] rounded-xl mt-6 place-content-center justify-items-center border-[3px] border-[#00000080]'>
      <div className='flex'>
        <p className='text-lg font-medium text-white'>Continue</p>
        <FaLongArrowAltRight className='ml-2 mt-2 text-white'/>
      </div>
    </button>
  );
};

export default ContinueButton;
