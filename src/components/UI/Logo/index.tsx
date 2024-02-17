// import React from 'react'
import { Link } from 'react-router-dom'
import icon from '/LOGO.svg'

export const Logo = () => {
    return (
        <Link to="/">
            <img src={icon} alt="icon" />
        </Link>
    )
}
