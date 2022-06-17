import React from "react"
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';

//https://react-bootstrap.github.io/



function Header() {
    return( 
        <header>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home"><img src="images/logo192.png" alt="logo" width={30} /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Inner page</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    );
}

function MainContent(){
    return(
        <div>
            <h1>John Doe</h1>
            <ol>
                <li>It is fun</li>
                <li>Large community</li>
                <li>Popularity</li>
            </ol>
        </div>
    );
}

function Footer() {
    return ( 
        <footer>
            <small>© 2022 sergiorgiraldo development. All rights reserved.</small>
        </footer>
    );
}

function WholePage(){ 
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    );
}

ReactDOM.render(<WholePage />, document.getElementById("root"))

