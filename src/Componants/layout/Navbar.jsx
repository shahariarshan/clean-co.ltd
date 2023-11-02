import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="flex-none hidden lg:block">
        <div className="flex gap-3 ">
          {/* Navbar menu content here */}
          <NavLink to='/about' className={({isActive})=>isActive? 'btn btn-primary btn-sm' : 'btn-sm btn-ghost'}>About</NavLink>
          <NavLink to='/contact' className={({isActive})=>isActive? 'btn btn-primary btn-sm' : 'btn-sm btn-ghost'}>Contact</NavLink>
          {
            user?.email?
            (<button onClick={logOut} className="btn btn-primary btn-sm">Log Out</button>) :
            <NavLink to='/login' className={({isActive})=>isActive? 'btn btn-primary btn-sm' : 'btn-sm btn-ghost'}>Login</NavLink>}
          {/* <NavLink to='contact'><a>Navbar Item 2</a></NavLink> */}
        </div>
      </div>
    );
};

export default Navbar;