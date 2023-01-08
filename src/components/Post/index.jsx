import React from 'react'
import { useParams } from 'react-router-dom'
import posts from 'assets/posts.json'
import PostModelo from 'components/PostModelo';

export default function Post() {
    const parametros = useParams();
    
    const post = posts.find(post => {
      return post.id === Number(parametros.id)
    })

  return (
    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <h1>Texto</h1>
    </PostModelo>
  )
}
