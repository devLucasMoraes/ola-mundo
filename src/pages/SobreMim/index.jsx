import PostModelo from 'components/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Lucas!</h3>
      <img className={styles.fotoSobreMim} src="https://github.com/devLucasMoraes.png" alt="Minha Foto" />
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti pariatur aut maiores veritatis a necessitatibus fuga architecto odio quod, animi, molestias maxime illo dignissimos eum dolore saepe hic aperiam!</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam in, harum eaque autem eligendi sint sequi temporibus. Necessitatibus excepturi omnis impedit quibusdam, laudantium similique aperiam incidunt nesciunt quo, ab dolorem.</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam in facilis harum, quibusdam tenetur fugit provident? Ducimus deleniti voluptates saepe quidem sed? Laborum culpa iure eveniet veniam dignissimos. Veniam, officia!</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eos quod, reiciendis sint qui, illum expedita est corrupti quia cum totam magnam dolorem ipsam aliquid quisquam facilis. Perferendis, quidem fugit.</p>

    </PostModelo>
  )
}
