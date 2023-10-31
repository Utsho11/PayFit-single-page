import React from 'react';
import { ImWrench } from "react-icons/im"
import { AiFillQuestionCircle } from "react-icons/ai";
import { RxCountdownTimer } from "react-icons/rx";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Leftside = () => {
    return (
        <div>
            <div className='mt-4'>
                <p className='px-4 flex items-center'><MdOutlineKeyboardArrowLeft className='text-slate-400' size={24}/>Back to Dashboard</p>
            </div>
            <div className='mt-64 px-8'>
                <p className='flex items-center my-2 gap-2 hover:bg-blue-100 hover:text-blue-500 hover:w-48 hover:px-1 hover:rounded'><ImWrench className='text-slate-400' size={20}></ImWrench>1. Compaign setup</p>
                <p className='flex items-center my-2 gap-2 hover:bg-blue-100 hover:text-blue-500 hover:w-48 hover:px-1 hover:rounded'><AiFillQuestionCircle className='text-slate-400' size={20}></AiFillQuestionCircle>2. Questions list</p>
                <p className='flex items-center my-2 gap-2 hover:bg-blue-100 hover:text-blue-500 hover:w-48 hover:px-1 hover:rounded'><RxCountdownTimer className='text-slate-400' size={20}></RxCountdownTimer>3. Timeline</p>
            </div>
        </div>
    );
};

export default Leftside;