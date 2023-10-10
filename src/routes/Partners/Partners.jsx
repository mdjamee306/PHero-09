import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Partners = () => {
    useEffect(() =>{
        Aos.init();
    },[])
    return (
        <section className=" body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <div data-aos="fade-up"><h1 className="text-7xl font-medium title-font mb-4">Our Team</h1></div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our tech-savvy team is the backbone of our organization, comprised of passionate individuals who breathe life into the digital world. Each member of our crew brings a unique set of skills and expertise to the table, forming a dynamic force dedicated to innovation and excellence. From developers crafting elegant code to engineers architecting cutting-edge solutions, and from designers shaping user-friendly interfaces to data wizards unraveling complex insights, our team is a powerhouse of talent</p>
                </div>
                <div  data-aos="zoom-in-up" className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-[50px] h-[50px] rounded-full bg-gray-100 object-cover object-center flex-shrink-0  mr-4" src="https://i.ibb.co/2qX9Tws/one.jpg"/>
                                <div className="flex-grow">
                                    <h2 className="text-[#EBE4D1] title-font font-medium">Holden Caulfield</h2>
                                    <p className="text-gray-500">UI Designer</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-[50px] h-[50px] rounded-full bg-gray-100 object-cover object-center flex-shrink-0  mr-4" src="https://i.ibb.co/h2LKX59/two.jpg"/>
                                <div className="flex-grow">
                                    <h2 className="text-[#EBE4D1] title-font font-medium">Henry Letham</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-[50px] h-[50px] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://i.ibb.co/jGswn5J/three.jpg"/>
                                <div className="flex-grow">
                                    <h2 className="text-[#EBE4D1] title-font font-medium">Oskar Blinde</h2>
                                    <p className="text-gray-500">Founder</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-[50px] h-[50px] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://i.ibb.co/Bng0s1V/four.jpg"/>
                                <div className="flex-grow">
                                    <h2 className="text-[#EBE4D1] title-font font-medium">John Doe</h2>
                                    <p className="text-gray-500">DevOps</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-[50px] h-[50px] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://i.ibb.co/hYFn8JK/five.jpg"/>
                                <div className="flex-grow">
                                    <h2 className="text-[#EBE4D1] title-font font-medium">Martin Eden</h2>
                                    <p className="text-gray-500">Software Engineer</p>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-[50px] h-[50px] bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://i.ibb.co/M79QYwV/six.png"/>
                                <div className="flex-grow">
                                    <h2 className="text-[#EBE4D1] title-font font-medium">MD Jamee</h2>
                                    <p className="text-gray-500">Front End Developer</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;