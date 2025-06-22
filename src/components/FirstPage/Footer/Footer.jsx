import "../FirstPage.css"
const Footer = () => {
    return (
        <div className="footer-firstPage">
                <footer>
                    <div className="left">
                        <nav className="up">
                            <button>
                                <img src="./YellowFlower.png" alt="YellowFlower" />
                                <b>The 2024 PiggyVest Savings Report</b>
                                <div style={{ height: '.8em', width: '.1em', backgroundColor: '#00D9EC' }}></div>
                            </button>
                            <h1>The Better Way to Save & Invest</h1>
                            <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and
                                invest with ease. </p>
                        </nav>
                        <nav className="down">
                            <button>
                                <img src="./iPhoneLogo.svg" alt="iPhone" />
                                <p>Get on iPhone</p>
                            </button>
                            <button>
                                <img src="./AndroidLogo.svg" alt="Android" />
                                <p>Get on Android</p>
                            </button>
                        </nav>
                    </div>
                    <div className="right">
                        <img src="./IHMockup.png" alt="" />
                    </div>
                </footer>
        </div>
    )
}

export default Footer;