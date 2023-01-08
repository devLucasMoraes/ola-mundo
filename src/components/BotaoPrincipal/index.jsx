import styles from './BotaoPrincipal.module.css'

import React from 'react'

export default function BotaoPrincipal(props) {
  return (
    <button className={`${styles.botaoPrincipal} ${styles[props.tamanho]}`}>{props.children}</button>
  )
}
