
import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Header  = () => {
    return (
        <Container className='fixed-top' style={{backgroundColor: 'rgb(13,85,12)',}}>
           <Image
            style={logo} 
            src='assets/logo.png'
            />
        </Container>
    )
}  

const container = {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(13,85,12)',
}

const logo = {
        width: "30vh",
        resizeMode: 'contain',
        margin: "1px 20%"
    }

export default Header;