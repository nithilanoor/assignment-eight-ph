import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {

    const location = useLocation();

    const navbarBg = () => {
        if (location.pathname === '/'){
            return {
                bgColor: 'bg-[#9538E2]',
                textColor: 'text-white'
            }
        }
        else{
            return{
                bgColor: 'bg-white',
                textColor: 'text-[#9538E2]'
            }
        }
    };

    const {bgColor, textColor} = navbarBg();

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/stats">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>

    return (
        <div className={`${bgColor} navbar`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className={`btn btn-ghost text-xl font-bold  ${textColor}`}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 ${textColor}`}>
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <Link to="/cart"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5  ${textColor}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg></Link>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">

                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <Link to="/wishlist"><p className={`text-xl font-semibold  ${textColor}`}><FaRegHeart /></p></Link>
                                
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;