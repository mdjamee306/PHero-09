import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AiOutlineGoogle } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Register = () => {
    useEffect(() =>{
        Aos.init();
    },[])
    const { signUP, googleSignIn } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const register = new FormData(e.currentTarget)
        const email = register.get('email')
        const password = register.get('password')
        const name = register.get('name')
        const url = register.get('url')

        if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
                password
            )
        ) {
            swal("Error!", "you have to take more than 6 character, at least one capital letter, one number and one special character", "error")
            return;
        }

        signUP(email, password)
            .then(result => {
                console.log(result.user);
                swal("Good job!", "successfully user created", "success");
            })
            .catch(error => {
                console.error(error)
            })
    }
    const googleIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                swal("Good job!", "successfully login", "success");
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:gap-10 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!!</h1>
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input name='url' type="text" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            
                         <h3>Have an account? <Link to={'/login'} className='text-violet-900 text-xl font-semibold'>Login</Link></h3>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button onClick={googleIn} className="btn btn-primary"><span className='text-sm'>Google</span> <span className='text-3xl'><AiOutlineGoogle></AiOutlineGoogle></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;