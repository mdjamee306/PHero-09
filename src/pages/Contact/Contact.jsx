import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Contact = () => {
    useEffect(() =>{
        Aos.init();
    },[])
    return (
        <div>
            <section className="bg-slate-300 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <div data-aos="fade-up">
                        <h1  className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#132043]">Contact Us</h1>
                        </div>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-500">Ready to elevate your tech experience? Whether you have burning questions, innovative ideas to share, or just want to say hello, we are thrilled to hear from you. At TechG, we value your input, curiosity, and enthusiasm for all things tech</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div data-aos="fade-left" className="relative">
                                    <label className="leading-7 text-xl text-black">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-[#132043] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div data-aos="fade-right" className="relative">
                                    <label className="leading-7 text-xl text-black">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-[#132043] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div data-aos="fade-up" className="relative">
                                    <label className="leading-7 text-xl text-black">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-[#132043] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-indigo-500">TechG@</a>
                                <p className="leading-normal my-5">49 Smith Warner.
                                <br />Saint Cloud, CoxBazar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;