import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import keqing from "../assets/keqing.jpg";
import lumine from "../assets/lumine.jpg";
import klee from "../assets/klee.jpg";

const RightSide = () => {
    return (
        <div className='hidden xl:block w-[20rem] pt-4 ml-8 mr-8'>
            {/* Search */}

            <div className='flex items-center'>
                <div className='relative w-full'>
                    <input className='w-full h-12 rounded-full pl-[3rem] bg-gray-100
                   outline-blue-500' placeholder='Search Twitter' />
                </div>

                <div className='absolute pl-4'>
                    <BsSearch className='' />
                </div>
            </div>

            {/* Trends */}

            <div className='h-[26rem] bg-gray-100 rounded-[1rem]'>
                <div className='mt-6'>
                    <p className='font-bold text-[20px] p-4 pb-2'>Trends for you</p>
                </div>

                {/* HashTag */}
                <div className=''>
                    <div className='h-16 px-4 flex flex-col justify-center'>

                        <div className='flex justify-between items-center'>
                            <p className='text-xs '>Trending in USA</p>
                            <BsThreeDots />
                        </div>

                        <div>
                            <p className='font-bold'>Tiktok</p>
                        </div>

                        <div>
                            <p className='text-xs'>537k Tweets</p>
                        </div>
                    </div>

                    <div className='h-16 px-4 flex flex-col justify-center'>

                        <div className='flex justify-between items-center'>
                            <p className='text-xs '>Trending in USA</p>
                            <BsThreeDots />
                        </div>

                        <div>
                            <p className='font-bold'>Instagram</p>
                        </div>

                        <div>
                            <p className='text-xs'>237k Tweets</p>
                        </div>
                    </div>

                    <div className='h-16 px-4 flex flex-col justify-center'>

                        <div className='flex justify-between items-center'>
                            <p className='text-xs '>Trending in USA</p>
                            <BsThreeDots />
                        </div>

                        <div>
                            <p className='font-bold'>Facebook</p>
                        </div>

                        <div>
                            <p className='text-xs'>452k Tweets</p>
                        </div>
                    </div>

                    <div className='h-16 px-4 flex flex-col justify-center'>

                        <div className='flex justify-between items-center'>
                            <p className='text-xs '>Trending in China</p>
                            <BsThreeDots />
                        </div>

                        <div>
                            <p className='font-bold'>Douyin</p>
                        </div>

                        <div>
                            <p className='text-xs'>537k Tweets</p>
                        </div>
                    </div>

                    <div className='h-16 px-4 flex flex-col justify-center'>

                        <div className='flex justify-between items-center'>
                            <p className='text-xs '>Trending in USA</p>
                            <BsThreeDots />
                        </div>

                        <div>
                            <p className='font-bold'>Snapchat</p>
                        </div>

                        <div>
                            <p className='text-xs'>537k Tweets</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='font-semibold text-blue-500 text-sm pl-4 my-2'>Show more</p>
                </div>
            </div>

            {/* Who to follow */}

            <div className='h-[16rem] bg-gray-100 rounded-[1rem] mt-6 pt-2 pl-4 px-4'>
                <div>
                    <p className='font-bold text-[20px]'>Who to follow</p>
                </div>

                <div className='grid gap-2'>

                    <div className='flex justify-between items-center mt-2'>

                        <div className='flex'>
                            <div className='w-12 h-12'>
                                <img src={keqing} className="rounded-full w-full h-full object-cover" />
                            </div>

                            <div className='pl-2 '>
                                <p className='font-bold'>Keqing</p>
                                <p className='text-sm'>@Keqing</p>
                            </div>
                        </div>

                        <button className='bg-black text-white rounded-full px-4 h-8'>Follow</button>
                    </div>

                    <div className='flex justify-between items-center mt-2'>

                        <div className='flex'>
                            <div className='w-12 h-12'>
                                <img src={lumine} className="rounded-full w-full h-full object-cover" />
                            </div>

                            <div className='pl-2 '>
                                <p className='font-bold'>Lumine</p>
                                <p className='text-sm'>@Lumine</p>
                            </div>
                        </div>

                        <button className='bg-black text-white rounded-full px-4 h-8'>Follow</button>
                    </div>

                    <div className='flex justify-between items-center mt-2'>

                        <div className='flex'>
                            <div className='w-12 h-12'>
                                <img src={klee} className="rounded-full w-full h-full object-cover" />
                            </div>

                            <div className='pl-2 '>
                                <p className='font-bold'>Klee</p>
                                <p className='text-sm'>@Klee</p>
                            </div>
                        </div>

                        <button className='bg-black text-white rounded-full px-4 h-8'>Follow</button>
                    </div>
                </div>

                <div>
                    <p className='font-semibold text-blue-500 text-sm my-2'>Show more</p>
                </div>
            </div>

            {/* Terms of Service */}

            <div className='ml-5'>
                <ul className='flex flex-wrap mt-4 gap-x-3'>
                    <li>
                        <p className='text-[12px] text-gray-400'>Terns of Service</p>
                    </li>

                    <li>
                        <p className='text-[12px] text-gray-400'>Privacy Policy</p>
                    </li>

                    <li>
                        <p className='text-[12px] text-gray-400'>Cookie Policy</p>
                    </li>

                    <li>
                        <p className='text-[12px] text-gray-400'>Accessibility</p>
                    </li>

                    <li>
                        <p className='text-[12px] text-gray-400'>Ads info</p>
                    </li>

                    <li>
                        <p className='text-[12px] text-gray-400'>More <span className='text-[8px]'>•••</span></p>
                    </li>
                </ul>

                <div>
                    <p className='text-[12px] text-gray-400 pt-2'>@2023 Twitter, Inc.</p>
                </div>
            </div>
        </div>
    )
};

export default RightSide