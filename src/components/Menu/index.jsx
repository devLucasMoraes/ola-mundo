import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <header>
        <nav className={styles.navegacao}>
            <a href="/" className={styles.link}>Início</a>
            <a href="/sobremim" className={styles.link}>Sobre Mim</a>
        </nav>
    </header>
  )
}
