import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div>
            <h2 className='text-7xl text-center'>Features</h2>
            <Marquee pauseOnHover={true} className='mt-4 md:mt-12'>
            <div className='flex gap-3 cursor-pointer justify-center items-center md:mr-20 mr-6'>
                    <h3 className='text-sm'>sohag360</h3>
                    <img className='w-[50px] rounded-full' src="https://i.ibb.co/ZBvtm7x/icon.webp" alt="Ai" />
                </div>
                <div className=' mr-4 md:mr-20'>
                I can be a React component, multiple React components, or just some text.
                </div>
                <Link to={"services"}>
                    <button className="btn md:mr-20 mr-8">Buy Tickets</button>
                </Link>
                <div className='flex gap-3 cursor-pointer justify-center items-center md:mr-20 mr-6'>
                    <h3 className='text-sm'>Ai Events</h3>
                    <img className='w-[50px] rounded-full' src="https://i.ibb.co/F8pdd2B/ai.jpg" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default News;