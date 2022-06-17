import React from 'react';
import Nav from 'react-bootstrap/Nav';
import AirbnbLogo from '../images/airbnb-logo.png';
import AirbnbPhotos from '../images/photo-grid.png';

function header() {
    return (
        <div>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/home"><img src={AirbnbLogo} alt="logo" width={80}/></Nav.Link>
                </Nav.Item>
            </Nav>
            <p className='header--grid'>
                <img src={AirbnbPhotos} alt="photos" width={400}/>
            </p> 
        </div>   
    );
}

export default header;