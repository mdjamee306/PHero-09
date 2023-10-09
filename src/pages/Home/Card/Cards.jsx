import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {


    const { id, image, category_name, title, card_bg, title_color, category_bg } = card || {}

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div  data-aos="zoom-in" className='rounded-xl shadow-xl' style={{ background: `${card_bg}` }}>
                <div className={`flex flex-col drop-shadow-xl rounded-xl  bg-clip-border shadow-md`}>
                    <div className={`overflow-hidden rounded-xl  bg-clip-border`}>
                        <img
                            src={image}
                            className="h-[500px] w-full"
                        />
                    </div>
                    <div className={`px-4 mt-5 `} style={{ color: `${title_color}` }} >
                        <div>
                            <button className='py-1 px-4 font-medium' style={{ background: `${category_bg}` }} >{category_name}</button>
                        </div>
                        <div className='mt-3 mb-4 font-semibold text-sm'>
                            <h4>{title}</h4>
                        </div>
                        <div className='p-3'>
                            <Link to={`card/${id}`}>
                                <button className="btn btn-outline btn-success w-full">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;