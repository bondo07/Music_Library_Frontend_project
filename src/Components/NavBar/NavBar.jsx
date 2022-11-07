import './NavBar.css'
import dccImage from '../../images/dCC_Transparent_White.png'
const NavBar = (props) => {
    return ( 
        <nav>
            <h1 className="logo">
                <img src={dccImage}
                alt='dCC Logo' 
                className="img">
                </img>
                deeSeeSotify
            </h1>
        </nav>
     );
}
 
export default NavBar;
