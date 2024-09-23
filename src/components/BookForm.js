import React, { useContext } from 'react';
import CheckIn from './CheckIn';
import AdultsDropdown from './AdultsDropdown';
import KidsDropdown from './KidsDropdown';
import CheckOut from './CheckOut';
import { RoomContex } from '../context/RoomContext';

const BookForm = () => {
  const { handleClick } = useContext(RoomContex)
  return (
    <form className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full lg:flex-row h-full'>
        <div className='flex-1 border-r'>
          <CheckIn />
        </div>
        <div className='flex-1 border-r'>
          <CheckOut />
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropdown />
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown />
        </div>
        {/* btn */}
        <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary'> Check now</button>
      </div>
    </form>
  )
};

export default BookForm;
