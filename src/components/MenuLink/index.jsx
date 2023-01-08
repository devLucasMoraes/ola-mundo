import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink(props) {
    return (
        <NavLink to={props.to} className={({isActive}) => `${styles.link} ${isActive ? styles.linkDestacado : ""}`} end>{props.children}</NavLink>
    )
}
