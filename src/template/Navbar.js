import { Link } from 'react-router-dom';

const NavigationBar = () => {

    return (
        <nav className='navbar'>
            <h1>The App Name</h1>

            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create-blog'>Add New Blog</Link>
            </div>

        </nav>
    );
}

export default NavigationBar;