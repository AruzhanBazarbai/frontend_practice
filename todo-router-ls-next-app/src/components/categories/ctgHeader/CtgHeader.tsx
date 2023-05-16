import React, { FC } from 'react'
import {FaPlus} from 'react-icons/fa';

type Props = {
  setFormVisibility: ()=>void;
}

const CtgHeader:FC<Props> = ({setFormVisibility}) => {
  return (
  <div className='flex items-center justify-center mt-6 select-none'>
    <div className='flex bg-white  py-2  w-[350px] md:w-[600px]  max-[281px]:w-[260px] rounded-sm'>
      <div className=' text-xl font-bold ml-3 w-full lg:ml-5'  >Categories</div>
      <button className='mr-4 hover:scale-150 hover:text-orange-300' onClick={()=>setFormVisibility()}>
          <FaPlus />
      </button>
    </div>
  </div>
  )
}

export default CtgHeader