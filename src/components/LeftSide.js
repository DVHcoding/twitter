import React from 'react'
import Twitter from '../assets/twitter.png';
import { RiHome7Fill } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BiBookmark } from 'react-icons/bi';
import { RiFileList2Line } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi'
import { FaRegCommentDots } from 'react-icons/fa'
import tweet from '../assets/tweet.png';
import profile from '../assets/ayaka.jpg';
import {BsThreeDots} from 'react-icons/bs';

const LeftSide = () => {
    return (
        <div>
            <div className="hidden sm:block fixed sm:w-20 pt-8 h-screen lg:w-80 lg:pl-12 
        md:w-32 md:items-end md:pr-4">
                <div>
                    <ul className="w-full space-y-6 flex flex-col justify-center items-center
              lg:justify-start lg:items-start">
                        <li>
                            <div className='h-6 w-6 sm:h-9 sm:w-9'>
                                <img src={Twitter} />
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <RiHome7Fill className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className='font-bold pl-2 text-[20px]'>Home</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <BsSearch className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className=' pl-2 text-[20px]'>Explore</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <FaBell className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className=' pl-2 text-[20px]'>Notifications</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <HiOutlineMail className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className=' pl-2 text-[20px]'>Message</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <BiBookmark className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className=' pl-2 text-[20px]'>Bookmarks</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <RiFileList2Line className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className=' pl-2 text-[20px]'>List</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <HiOutlineUser className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className=' pl-2 text-[20px]'>Profile</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex'>
                                <div>
                                    <FaRegCommentDots className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className='hidden lg:flex'>
                                    <p className=' pl-2 text-[20px]'>More</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='lg:hidden w-7 h-7 sm:w-10 sm:h-10 bg-blue-500 p-2 rounded-full'>
                                <img src={tweet} />
                            </div>

                            <div className='hidden lg:flex w-60 h-14 justify-center items-center'>

                                <p className=' text-white bg-blue-400 p-2 rounded-full 
                                text-center w-full h-full flex items-center justify-center text-[19px]'>Tweet</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-center items-center h-14 lg:justify-start 
                    md:justify-end lg:pl-4 lg:w-60 md:mr-9 md:mt-10'>

                    <div className="rounded-full flex justify-center lg:justify-start sm:mt-[5rem] md:mt-0 ">
                        <img src={profile} className="rounded-full object-cover w-7 h-7 sm:w-10 sm:h-10 lg:w-12" />
                    </div>

                    <div className='hidden lg:flex justify-center items-center h-full pl-4 lg:justify-between w-full'>
                        <div className='flex flex-col'>
                            <p className='text-[16px] font-bold'>Ayaka</p>
                            <p className='text-[12px]'>@Ayaka</p>
                        </div>

                        <div className='pr-6'>
                            <BsThreeDots className='w-6 h-6' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default LeftSide