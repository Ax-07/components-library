import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const logo = "<Ax-ui/>"
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'><NavLink to="/" className='navbar__link'><h1>{logo}</h1></NavLink></li>
                <li className='navbar__item'><NavLink to="/components" className='navbar__link'>Components</NavLink></li>
                <li className='navbar__item'><NavLink to="/templates" className='navbar__link'>Templates</NavLink></li>
                <li className='navbar__item'><NavLink to="/themes" className='navbar__link'>Themes</NavLink></li>
                <li className='navbar__item'><NavLink to="/documentations" className='navbar__link'>Docs</NavLink></li>
            </ul>
        </nav>
    );
};