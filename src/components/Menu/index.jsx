import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <header>
        <nav className={styles.navegacao}>
            <Link to="/" className={styles.link}>Início</Link>
            <Link to="/sobremim" className={styles.link}>Sobre Mim</Link>
        </nav>
    </header>
  )
}
