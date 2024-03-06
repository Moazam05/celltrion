import React from 'react'
import { Link } from 'react-router-dom'

const Role = ({ name, img, link }) => {
    return (
        <div className='rselection-item'>
            <div className='rselection-img'>
                <a href={link}><img src={img} alt={name} /></a>
            </div>
            <Link className='rselection-role_link' to={link}>{name}</Link>
        </div>
    )
}

export default Role