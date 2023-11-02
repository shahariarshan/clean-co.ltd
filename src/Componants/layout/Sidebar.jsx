import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-3 ">
                {/* Navbar menu content here */}
                <NavLink to='/about' className={({isActive})=>isActive? 'btn btn-primary ' : ' btn-secondary btn-ghost'}>About</NavLink>
                <NavLink to='/contact' className={({isActive})=>isActive? 'btn btn-primary ' : 'btn-secondary btn-ghost'}>Contact</NavLink>
                <NavLink to='/login' className={({isActive})=>isActive? 'btn btn-primary ' : 'btn-secondary btn-ghost'}>Login</NavLink>
                {/* <NavLink to='contact'><a>Navbar Item 2</a></NavLink> */}
              </div>
          </ul>
    );
};

export default Sidebar;