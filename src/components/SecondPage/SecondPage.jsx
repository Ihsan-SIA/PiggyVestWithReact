import "./SecondPage.css"
const SecondPage = () =>{
    return(
        <div className="second-Page">
            <main className="secondPage">
        
        <div className="body">
            <nav className="up">
                <box class="left">
                    <img src="./Padlock.svg" alt="Padlock"/>
                </box>
                <box className="right">
                    <h1>Your security is our priority</h1>
                    <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security
                        encryption to ensure that your information is comepletely protected from fraud.</p>
                    <div>
                        <img src="./arrow.png" alt="arrow"/>
                        <b>More on our security measures</b>
                    </div>

                </box>
            </nav>
            <nav className="down">
                <h1>Many ways to build your savings</h1>
                <p>Earn 12%-22% when you save with any of these PiggyVest plans.</p>
            </nav>
        </div>
    </main>
        </div>
    )
}

export default SecondPage;