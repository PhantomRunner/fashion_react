import './header.css'
import logoImg from './../../fashion-images/icons/logo.svg'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-logo">
                        <img src={logoImg} alt="logo" />
                        <span>Fashion</span>
                    </div>

                    <nav className="header-nav">
                        <ul>
                            <li><a href=''>CATALOGUE</a></li>
                            <li><a href=''>FASHION</a></li>
                            <li><a href=''>FAVOURITE</a></li>
                            <li><a href=''>LIFESTYLE</a></li>
                            <li><a href='' className="header_nav_button">SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;