import React from 'react'
import { RiMessage3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import profile from "../assets/ayaka.jpg";
import picture from "../assets/costume.jpg";
import picture2 from "../assets/costume2.jpg";
import picture3 from "../assets/costume3.jpg";

const Post = () => {
    return (
        <div>
            <div className='hover:bg-gray-100 ease-out duration-300 pb-4 border-l border-b'>
                {/* topic start */}
                <div>
                    <div className='flex justify-between items-center pt-4'>
                        <div className='flex items-center pl-5 sm:pl-14'>
                            <RiMessage3Fill className='text-gray-600' />
                            <p className='font-semibold text-gray-600 pl-3'>Genshin Impact</p>
                            <span className='pl-2'>&#8226;</span>
                            <p className='text-blue-500 font-bold text-sm pl-2'>See more</p>
                        </div>

                        <div className='mr-4 hover:bg-gray-200 rounded-full p-1 ease-out duration-300'>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>

                {/* Post header */}

                <div className='pl-6 pt-2 flex'>

                    <div>
                        <div className='w-12 h-12 flex'>
                            <img src={profile} className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>

                    <div className='pl-3 w-full'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <p className='text-[14px] sm:text-[16px] font-bold'>Ayaka</p>
                                <p className='pl-2 text-[14px] sm:text-[16px]'>@Ayaka</p>
                                <span className=' text-[14px] sm:text-[16px] pl-2 pr-2 text-gray-500'>&#8226;</span>
                                <p className='text-gray-500 text-[14px] sm:text-[16px]'>12h</p>
                            </div>

                            <BsThreeDots className='mr-6 w-5 h-5' />
                        </div>

                        <div>
                            <p className='text-[15px] sm:text-[17px]'>Ayaka Costume</p>
                        </div>
                    </div>
                </div>


                {/* img */}

                <div className='pt-4 px-5 sm:px-6 sm:pl-[5.8rem]'>
                    <div className=''>
                        <img src={picture} className="rounded-[1rem] border" />
                    </div>


                    {/* Post Bottoms */}

                    <div className=''>
                        <ul className='flex items-center justify-between pt-4 px-6'>
                            <li className='flex items-center'>
                                <RiChat1Line className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>40</p>
                            </li>

                            <li className='flex items-center'>
                                <BiRepost className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>2,727</p>
                            </li>

                            <li className='flex items-center'>
                                <AiOutlineHeart className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>17k</p>
                            </li>

                            <li>
                                <FiUpload className='sm:w-5 sm:h-5' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* picture 2 */}
            <div className='hover:bg-gray-100 ease-out duration-300 pb-4 border-l border-b'>
                {/* topic start */}
                <div>
                    <div className='flex justify-between items-center pt-4'>
                        <div className='flex items-center pl-5 sm:pl-14'>
                            <RiMessage3Fill className='text-gray-600' />
                            <p className='font-semibold text-gray-600 pl-3'>Genshin Impact</p>
                            <span className='pl-2'>&#8226;</span>
                            <p className='text-blue-500 font-bold text-sm pl-2'>See more</p>
                        </div>

                        <div className='mr-4 hover:bg-gray-200 rounded-full p-1 ease-out duration-300'>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>

                {/* Post header */}

                <div className='pl-6 pt-2 flex'>

                    <div>
                        <div className='w-12 h-12 flex'>
                            <img src={profile} className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>

                    <div className='pl-3 w-full'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <p className='text-[14px] sm:text-[16px] font-bold'>Ayaka</p>
                                <p className='pl-2 text-[14px] sm:text-[16px]'>@Ayaka</p>
                                <span className=' text-[14px] sm:text-[16px] pl-2 pr-2 text-gray-500'>&#8226;</span>
                                <p className='text-gray-500 text-[14px] sm:text-[16px]'>12h</p>
                            </div>

                            <BsThreeDots className='mr-6 w-5 h-5' />
                        </div>

                        <div>
                            <p className='text-[15px] sm:text-[17px]'>Ayaka Costume</p>
                        </div>
                    </div>
                </div>


                {/* img */}

                <div className='pt-4 px-5 sm:px-6 sm:pl-[5.8rem]'>
                    <div className=''>
                        <img src={picture2} className="rounded-[1rem] border" />
                    </div>


                    {/* Post Bottoms */}

                    <div className=''>
                        <ul className='flex items-center justify-between pt-4 px-6'>
                            <li className='flex items-center'>
                                <RiChat1Line className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>40</p>
                            </li>

                            <li className='flex items-center'>
                                <BiRepost className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>2,727</p>
                            </li>

                            <li className='flex items-center'>
                                <AiOutlineHeart className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>17k</p>
                            </li>

                            <li>
                                <FiUpload className='sm:w-5 sm:h-5' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* picture 3 */}
            <div className='hover:bg-gray-100 ease-out duration-300 pb-4 border-l border-b'>
                {/* topic start */}
                <div>
                    <div className='flex justify-between items-center pt-4'>
                        <div className='flex items-center pl-5 sm:pl-14'>
                            <RiMessage3Fill className='text-gray-600' />
                            <p className='font-semibold text-gray-600 pl-3'>Genshin Impact</p>
                            <span className='pl-2'>&#8226;</span>
                            <p className='text-blue-500 font-bold text-sm pl-2'>See more</p>
                        </div>

                        <div className='mr-4 hover:bg-gray-200 rounded-full p-1 ease-out duration-300'>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>

                {/* Post header */}

                <div className='pl-6 pt-2 flex'>

                    <div>
                        <div className='w-12 h-12 flex'>
                            <img src={profile} className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>

                    <div className='pl-3 w-full'>
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <p className='text-[14px] sm:text-[16px] font-bold'>Ayaka</p>
                                <p className='pl-2 text-[14px] sm:text-[16px]'>@Ayaka</p>
                                <span className=' text-[14px] sm:text-[16px] pl-2 pr-2 text-gray-500'>&#8226;</span>
                                <p className='text-gray-500 text-[14px] sm:text-[16px]'>12h</p>
                            </div>

                            <BsThreeDots className='mr-6 w-5 h-5' />
                        </div>

                        <div>
                            <p className='text-[15px] sm:text-[17px]'>Raiden Costume</p>
                        </div>
                    </div>
                </div>


                {/* img */}

                <div className='pt-4 px-5 sm:px-6 sm:pl-[5.8rem]'>
                    <div className=''>
                        <img src={picture3} className="rounded-[1rem] border" />
                    </div>


                    {/* Post Bottoms */}

                    <div className=''>
                        <ul className='flex items-center justify-between pt-4 px-6'>
                            <li className='flex items-center'>
                                <RiChat1Line className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>40</p>
                            </li>

                            <li className='flex items-center'>
                                <BiRepost className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>2,727</p>
                            </li>

                            <li className='flex items-center'>
                                <AiOutlineHeart className='w-5 h-5' />
                                <p className='pl-1 sm:pl-2 text-[13px] sm:text-[16px]'>17k</p>
                            </li>

                            <li>
                                <FiUpload className='sm:w-5 sm:h-5' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Post