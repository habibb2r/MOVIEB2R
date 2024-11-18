import { Link, NavLink } from 'react-router-dom';
import logo from './movieb2r.png';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
  }
    return (
    
        <div className="navbar fixed px-[2%] py-[3%] md:py-[1%] font-mono  bg-opacity-30  bg-base-100 z-20 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  text-2xl w-52">
              <li><NavLink to='/'>Home</NavLink></li>
              <li>
                <a></a>
                <a>Movies</a>
                <ul className="p-2">
                <li><NavLink to='/popular'>Popular</NavLink></li>
                <li><NavLink to='/toprated'>Top Rated</NavLink></li>
                <li><NavLink to='/popular'>Popular</NavLink></li>
                  
                </ul>
              </li>
              <li><a>TV Shows</a></li>
            </ul>
          </div>
          <img className='h-[60px] md:h-[70px]' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
          <li><NavLink to='/'>Home</NavLink></li>
            <li tabIndex={0}>
              <details>
                <summary>Movies</summary>
                <ul className="p-2 w-[200px]">
                  <li><NavLink to='/popular'>Popular</NavLink></li>
                  <li><NavLink to='/toprated'>Top Rated</NavLink></li>
                  <li><NavLink to='/popular'>Popular</NavLink></li>
                
                </ul>
              </details>
            </li>
           
            <li><a>TV Shows</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          { user && <button onClick={handleLogOut} className="btn btn-error">Logout</button>||<Link to='/signin' className="btn btn-accent">Login</Link>}
        </div>
      </div>
    );
};

export default Navbar;