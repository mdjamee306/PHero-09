import React from 'react';

const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="grid grid-cols-1 lg:hero-content ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact us</h1>
                    <p className="py-6">Can't find the information you need on our website? Contact our general inquiries line, and we'll direct you to the right department.</p>
                </div>
                <div className="card flex-shrink-0 w-10/12 mx-auto md:max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="write your name" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover"></a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input type="text" placeholder="write your phone number" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover"></a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="write your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;