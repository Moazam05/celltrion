import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="logo" />
                </Link>
            </Container>
        </header>
    )
}

export default Header