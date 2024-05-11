import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='footerContainer'>
                <div className='footer-logo'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCJrNI_1KOC3UiptmmSwx_B6b8a80_A5itw&s' alt='logo'/>
                </div>
                <div className='footerLinks'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='footerSocial'>
                    <a href='#'><img src='/Images/facebook.png' alt='facebook'/></a>
                    <a href='#'><img src='/Images/instagram.png' alt='instagram'/></a>
                    <a href='#'><img src='/Images/twitter.png' alt='twitter'/></a>
                </div>
                <div className='footer-contact'>
                    <p>123 Main St</p>  
                    <p>123-456-7890</p>
                    <p>mail:asjb@gmail</p>
                </div>
            </div>
            <h3 style={{textAlign:'center'}}>&copy; 2021 Gym App</h3>
        </footer>
    )
}
export default Footer