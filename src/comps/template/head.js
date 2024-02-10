
import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Header  = () => {
    return (
        <Container fluid className='fixed-top d-flex justify-content-center' style={{backgroundColor: 'green',}}>
           <Image
            style={logo} 
            src='assets/download.png'
            />
        </Container>
    )
}  


const logo = {
        width: "20vh",
        padding: "5px",
        resizeMode: 'contain',
        // margin: "1px 20%"
    }

export default Header;