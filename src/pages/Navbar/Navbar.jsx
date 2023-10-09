
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const Navbar = () => {
    const { userr, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const navLink = <>
        <li><NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#CCC8AA] underline" : ""}>Home</NavLink>
        </li>

        {userr &&
            <li><NavLink to={'/details'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#CCC8AA] underline" : ""}>Details</NavLink>
            </li>
        }

        {userr && <li><NavLink to={'/store'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#CCC8AA] underline" : ""}>Store</NavLink>
        </li>}

        {userr && <li><NavLink to={'/services'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#CCC8AA] underline" : ""}>Services</NavLink>
        </li>
        }
        <li><NavLink to={'/contact'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#CCC8AA] underline" : ""}>Contact us</NavLink>
        </li>

        <li><NavLink to={'/register'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#CCC8AA] underline" : ""}>Register</NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-[#CCC8AA]">
                            {navLink}
                        </ul>
                    </div>
                    <div className='block md:visible w-[50px] '>
                        <img className="rounded-full" src="https://i.ibb.co/fGD6Ld9/logo.jpg" alt="Logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-4 menu-horizontal px-1 text-xl font-semibold text-[#CCC8AA]">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-2">

                    {
                        userr ?
                            <div className="flex justify-center items-center">
                                <h3>{userr.displayName}</h3>
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={userr.photoURL} alt="user profile" />
                                    </div>
                                </label>

                                <Link>
                                    <button onClick={handleLogOut} className="btn">Logout</button>
                                </Link>
                            </div>
                            :
                            <Link to={'/login'}>
                                <button className="btn">Login</button>
                            </Link>
                    }
                    <Link to={"services"}>
                        <button className="btn">Buy Tickets</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;