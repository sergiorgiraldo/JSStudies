import reactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';

//https://react-bootstrap.github.io/

function myReasons(){ 
    return (
    <div>
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home"><img src="images/logo192.png" alt="logo" width={30}/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        
        <h1>John Doe</h1>
        <ol>
            <li>It is fun</li>
            <li>Large community</li>
            <li>Popularity</li>
        </ol>
        <footer>© 2022 sergiorgiraldo development. All rights reserved.</footer>
    </div>
    );
}

reactDOM.render(myReasons(), document.getElementById("root"))