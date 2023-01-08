import React from 'react'
import styles from './PostCard.module.css'

export default function PostCard(props) {
  return (
    <div className={styles.post}>
        <img className={styles.capa} src={`/assets/posts/${props.post.id}/capa.png`} alt="Imagem de capa do post" />
        <h2 className={styles.titulo}>{props.post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
    </div>
  )
}
