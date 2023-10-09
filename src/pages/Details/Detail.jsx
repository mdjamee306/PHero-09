import React from 'react';
import { Link } from 'react-router-dom';

const Detail = ({ card }) => {
    const { id, image, description, category_name, title_color, price } = card || {};
    return (
        <div>
            <div className='lg:flex justify-center w-6/12 mx-auto'>
                <img className='w-full object-cover rounded' src={image} alt="Children.png" />
            </div>

            <div className='lg:mt-12 mt-6 text-center'>
                <h3 className='font-bold text-4xl '>{category_name}</h3>
                <p className='md:px-16 mt-3 lg:mt-6 font-normal text-base mb-3 md:mb-8'>{description}</p>
            </div>
            <div className='md:flex justify-center'>
                <Link to={"/services"}>
                <button style={{ background: `${title_color}` }} className='rounded-lg text-white font-bold btn btn-success py-2 md:py-4 px-6 mt-2'>Buy Ticket</button></Link>
            </div>
        </div>
    );
};

export default Detail;