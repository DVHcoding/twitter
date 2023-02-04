import React from 'react'
import profile from '../assets/ayaka.jpg';
import { BsImage } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPoll } from 'react-icons/fa';
import { TbCalendarTime } from 'react-icons/tb';

const Input = () => {
    return (
        <div className='border-l'>
            <div className='flex items-center p-4 pt-4'>
                <div className='w-12 h-12 flex'>
                    <img src={profile} className="w-full h-full object-cover rounded-full" />
                </div>

                <div className='pl-4'>
                    <input type="text" placeholder="what's happening ?" className="outline-0
                    text-[17px] sm:text-[20px]"/>
                </div>
            </div>

            <div className='flex justify-between items-center border-b pl-10 sm:pl-20 pr-4 pb-4'>

                <ul className='flex space-x-5'>
                    <li>
                        <BsImage className='text-blue-400 w-4 h-4 sm:w-5 sm:h-5' />
                    </li>

                    <li>
                        <AiOutlineFileGif className='text-blue-400 w-4 h-4 sm:w-5 sm:h-5' />
                    </li>

                    <li className='hidden md:block'>
                        <FaPoll className='text-blue-400 w-4 h-4 sm:w-5 sm:h-5' />
                    </li>

                    <li>
                        <BsEmojiSmile className='text-blue-400 w-4 h-4 sm:w-5 sm:h-5' />
                    </li>

                    <li className='hidden md:block'>
                        <TbCalendarTime className='text-blue-400 w-4 h-4 sm:w-5 sm:h-5' />
                    </li>

                    <li>
                        <IoLocationSharp className='text-blue-400 w-4 h-4 sm:w-5 sm:h-5' />
                    </li>
                </ul>

                <div className=''>
                    <button className='bg-blue-300 rounded-full text-white px-3 sm:px-5 font-bold py-1 sm:py-2'>
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Input