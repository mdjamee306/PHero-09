import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Banner = () => {
    useEffect(() =>{
        Aos.init();
    },[])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PhrCK4h/banner.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div  data-aos="flip-left" className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-slate-300">Welcome to <span className='text-[#CCC8AA]'>TechG</span></h1>
                        <p className="mb-5 p-3 text-sm lg:text-xl">The world of technology and gaming seamlessly merge to offer you an unparalleled experience. At techg, we're your ultimate destination for exploring the latest in gadgets, gizmos, and gaming adventures.<span className='text-green-900 cursor-pointer'>read more</span></p>
                        <button className="btn btn-outline btn-primary text-xl font-bold">Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;