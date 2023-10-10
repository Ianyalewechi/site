import React , { useState, } from 'react';
import { Link } from 'react-router-dom';
// import { ArrowDropDown } from '@mui/icons-material';
import "./Navbar.css";
// import "./Dropdown";
import Dropdown from './Dropdown';


function Navbar() {
    const [click , setClick] = useState(false)
    // const [button , setButton] = useState(true)
    // const [dropdown, setDropdown] = useState(false)


        const handleClick = () => setClick (!click)
        const closeMobileMenu = () => setClick (false)

        // const onMouseEnter = () => {
        //     if(window.innerWidth < 960) {
        //         setDropdown(true);
        //     } else {
        //         setDropdown(true);
        //     }
        // };

        // const onMouseLeave = () => {
        //     if(window.innerWidth < 960) {
        //         setDropdown(false);
        //     } else {
        //         setDropdown(false);
        //     }
        // };
        

        // useEffect (() => {
        //     showButton();
        // }, []);

        // window.addEventListener("resize", showButton);

  return (
    <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                   
                   <img src={require('../images/gali.png')} alt="" width="200px" className='img-logo' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} /> 
                      
                      {/* if(click === true) {
                        show (CloseIcon)
                     } else {
                        show ( MenuIcon )
                     };  */}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-items'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                    HOME
                        </Link>
                    </li>
                    <li className='nav-items'
                        
                        // onMouseEnter={onMouseEnter}
                        // onMouseLeave={onMouseLeave}
                        >
                        <Link to="/#" className='nav-links' onClick={closeMobileMenu}>
                                 SERVICES 
                        {/* <ArrowDropDown className='shareIcon' /> */}
                        </Link>
                        {/* {dropdown && <Dropdown />} */}
                    </li>
                    {/* <li className='nav-items'>
                        <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                                PRODUCTS
                        </Link>
                    </li> */}
                    <li className='nav-items'>
                        <Link to="/contacts" className='nav-links' onClick={closeMobileMenu}>
                                CONTACT US
                        </Link>
                    </li>
                    {/* <li className='nav-items'>
                        <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                                CONTACT
                        </Link>
                    </li> */}
                </ul>
                    {/* {button && <Button buttonStyle="btn--outline">Sign Up</Button>} */}
            </div>
        </div>
    </>
  );
};

export default Navbar;

/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */