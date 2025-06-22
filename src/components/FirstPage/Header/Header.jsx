import "../FirstPage.css"
const Header = () => {
    return (
        <div className="header-firstPage">
                <header>
                    <nav className="left">
                        <a href="#">
                            <img src="./piggyLogo.svg" alt="logo" />
                        </a>
                        <div>
                            <a href="">Save</a>
                            <a href="">Invest</a>
                            <a href="">Stories</a>
                            <a href="">FAQ</a>
                            <a href="">Resources</a>
                        </div>
                    </nav>
                    <nav className="right">
                        <a href="">Sign in</a>
                        <button>Create free account</button>
                    </nav>
                </header>
        </div>
    )
}

export default Header;

