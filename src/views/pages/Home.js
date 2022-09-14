import React from 'react'
import Title from '../components/Title'

import style from './Home.module.css'

const Home = () => {
  
  return (
    <div className={style.container}>
      <Title title="Meu Título" subtitle="Meu subtitulo da seção"/>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea, commodi debitis aliquid perferendis temporibus cumque quasi magni laudantium dolores deserunt ratione aperiam, pariatur sed accusamus eaque aut sequi beatae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea, commodi debitis aliquid perferendis temporibus cumque quasi magni laudantium dolores deserunt ratione aperiam, pariatur sed accusamus eaque aut sequi beatae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea, commodi debitis aliquid perferendis temporibus cumque quasi magni laudantium dolores deserunt ratione aperiam, pariatur sed accusamus eaque aut sequi beatae.</p>
      </div>
      <Title title="Meu Título" subtitle="Meu subtitulo da seção"/>
    </div>
  )
}

export default Home