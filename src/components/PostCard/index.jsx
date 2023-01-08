import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

export default function PostCard(props) {
  return (
    <Link to={`/post/${props.post.id}`}>
      <div className={styles.post}>
        <img className={styles.capa} src={`/assets/posts/${props.post.id}/capa.png`} alt="Imagem de capa do post" />
        <h2 className={styles.titulo}>{props.post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  )
}
