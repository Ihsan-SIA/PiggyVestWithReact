import "./ThirdPage.css";

const ThirdPage = () => {
    return (
        <div className="third-Page">
            <main className="thirdPage">
                <div className="big">
                    <nav className="auto">
                        <box className="up">
                            <h1 style={{ color: '#003399' }}>Automated Savings</h1>
                            <p>Build a dedicated savings faster on your terms, automatically or manually.</p>
                        </box>
                        <box className="down">
                            <div className="left">
                                <img src="./arrow.png" alt="arrow" className="arrow" />
                                <b style={{ color: '#003399' }}>Piggybank</b>
                            </div>
                            <div className="right">
                                <img src="./Piggybank.png" alt="Piggybank" className="noPic" />
                            </div>
                        </box>
                    </nav>

                    <nav className="fixed">
                        <box className="up">
                            <h1 style={{ color: '#2295F2' }}>Fixed Savings</h1>
                            <p>Lock money away for a fixed duration without having access to it until maturity. It's like having
                                a custom fixed deposit.</p>
                        </box>
                        <box className="down">
                            <div className="left">
                                <img src="./arrow.png" alt="arrow" className="arrow" />
                                <b style={{ color: '#2295F2' }}>Safelock</b>
                            </div>
                            <div className="right">
                                <img src="./Safelock.png" alt="Safelock" className="noPic" />
                            </div>
                        </box>
                    </nav>

                    <nav className="target">
                        <box className="up">
                            <h1 style={{ color: '#2295F2' }}>Goal-oriented Savings</h1>
                            <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                        </box>
                        <box className="down">
                            <div className="left">
                                <img src="./arrow.png " alt="arrow" className="arrow"/>
                                <b style={{ color: '#2295F2' }}>Target Savings</b>
                            </div>
                            <div className="right">
                                <img src="./TargetSavings.avif" alt="TargetSavings" />
                                <img src="./TargetSavings.avif" alt="TargetSavings" className="noPic" />
                            </div>
                        </box>
                    </nav>

                    <nav className="flexN">
                        <box className="up">
                            <h1 style={{ color: '#2295F2' }}>Flex Naira</h1>
                            <p>Save, transfer, manage, organise, and withdraw your money at any time.</p>
                        </box>
                        <box className="down">
                            <div className="left">
                                <img src="./arrow.png" alt="arrow" className="arrow" />
                                <b style={{ color: '#2295F2' }}>Flex Naira</b>
                            </div>
                            <div className="right">
                                <img src="./FlexNaira.avif" alt="" />
                                <img src="./FlexNaira.avif" alt="FlexNaira" className="noPic" />
                            </div>
                        </box>
                    </nav>

                    <nav className="flexD">
                        <box className="up">
                            <h1>Flex Dollar</h1>
                            <p>Save and grow your money in foreign currencies such as Dollars.</p>
                        </box>
                        <box className="down">
                            <div className="left">
                                <img src="./arrow.png" alt="arrow" className="arrow" />
                                <b>Safelock</b>
                            </div>
                            <div className="right">
                                <img src="./FlexDollar.avif" alt="FlexDollar" className="noPic" />
                            </div>
                        </box>
                    </nav>

                    <nav className="hMoney">
                        <box className="up">
                            <h1 style={{ color: '#2295F2' }}>House Money</h1>
                            <p>Plan for your rent and household expenses.</p>
                        </box>
                        <box className="down">
                            <div className="left">
                                <img src="./arrow.png" alt="arrow" className="arrow" />
                                <b style={{ color: '#2295F2' }}>Safelock</b>
                            </div>
                            <div className="right">
                                <img src="./HouseMoney.png" alt="HouseMoney" className="noPic" />
                            </div>
                        </box>
                    </nav>
                </div>
            </main>
        </div>
    )
}

export default ThirdPage;