import React from 'react'
import Input from './Input';
import Navbar from './Navbar';
import Post from './Post';

const j = () => {
    return (
        <div className='w-screen mb-12 sm:max-w-[40rem] border-r ml-0 sm:ml-20 md:ml-32 lg:ml-[24rem]'>
            {/* Navbar */}
            <Navbar />
            {/* Input */}
            <div className='mt-14'>
                <Input/>
            </div>
            {/* Post */}
            <Post/>
        </div>
    )
};

export default j