import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink(props) {
    const localizacao = useLocation();
    //console.log(localizacao)

    return (
        <Link to={props.to} className={`${styles.link} ${localizacao.pathname === props.to ? styles.linkDestacado : ""}`}>{props.children}</Link>
    )
}
