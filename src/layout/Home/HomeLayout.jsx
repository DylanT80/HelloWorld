import './styles.css'
import { NavLink, Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <nav className='nav-container'>
                <div style={{ backgroundColor: "#333334"}}></div>
                <div className='layout-container'>
                    <NavLink className={'link'} to={'/'}>Home</NavLink>
                    <NavLink className={'link'} to={'/things-to-read'}>Things to Read</NavLink>
                </div>
            </nav>
            
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default HomeLayout;