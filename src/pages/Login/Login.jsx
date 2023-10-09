import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineGoogle } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Login = () => {
    useEffect(() =>{
        Aos.init();
    },[])
    const naviGated = useNavigate()
    const { signIn, googleSignIn, logOut } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const register = new FormData(e.currentTarget)
        const email = register.get('email')
        const password = register.get('password')
        const name = register.get('name')
        const url = register.get('url')
        
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                naviGated('/')
                swal("Good job!", "successfully login", "success");
            })
            .catch(error => {
                console.error(error)
                swal("Error!", error.message, "error")
            })
    }

    const googleIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                naviGated('/')
                swal("Good job!", "successfully login", "success");
                // toast("Wow so easy!")
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    return (
        <div  className="hero bg-gray-400 md:py-14 py-6">
            <ToastContainer />
            <div data-aos="zoom-in-left" className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-normal">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-normal">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <h3 className='text-black font-normal'>Do not have an account? <Link to={'/register'} className='text-violet-900 text-xl font-semibold'>Register</Link></h3>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                        <button onClick={googleIn} className="btn btn-primary"><span className='text-sm'>Google</span> <span className='text-3xl'><AiOutlineGoogle></AiOutlineGoogle></span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;