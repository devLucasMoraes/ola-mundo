import React from 'react'
import MenuLink from '../MenuLink'
import styles from './Menu.module.css'

export default function Menu() {


  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/" children="Início" />
        <MenuLink to="/sobremim" children="Sobre Mim" />
      </nav>
    </header>
  )
}
