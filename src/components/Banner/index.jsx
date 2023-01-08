import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import React from 'react'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro libero in aliquam, hic a quod saepe optio vel nesciunt nulla suscipit totam quos iste, voluptate quae quisquam neque ipsum odit?
            </p>
        </div>
        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} alt="circulo colorido" />
            <img className={styles.minhaFoto} src="https://github.com/devLucasMoraes.png" alt="Foto" />
        </div>
    </div>
  )
}
