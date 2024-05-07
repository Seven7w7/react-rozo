import React from 'react'
import './Main.css'
import { Containers } from '../../UI/Containers/Containers'
import { Section } from '../Section/Section'
import { Tittles } from '../../UI/Tittles/Tittles'
import { Card } from '../../UI/cards/Cards'
import {ReferenciaPersonal} from '../../UI/References/References'
import {IconosConBarra} from '../../UI/Boxes/Boxes'


export const Main = () => {
  return (
    <main className='main-page'>
      <Containers>
        <Section />
      </Containers>
      <Containers>
          <Tittles>
            <img src="public/imgs/sena.webp" alt="" />
            <h2>PROYECTOS</h2>
          </Tittles>
      </Containers>
      <div className='car'>
      <Card
          imageUrl="\imgs\image.png"
          title="PROYECTO 1"
          description="Descripción de la tarjeta 1."
          link="#"
        />
        <Card
          imageUrl="\imgs\image.png"
          title="PROYECTO 2"
          description="Descripción de la tarjeta 1."
          link="#"
        />
        <Card
          imageUrl="\imgs\image.png"
          title="PROYECTO 3"
          description="Descripción de la tarjeta 1."
          link="#"
        />
        <Card
          imageUrl="\imgs\image.png"
          title="PROYECTO 4"
          description="Descripción de la tarjeta 1."
          link="#"
        />
      </div>
      <Containers>
          <Tittles>
          <img src="public/imgs/sena.webp" alt="" />
            <h2>REFERENCIAS</h2>
          </Tittles>
      </Containers>
      <div className="referencias">
      <ReferenciaPersonal/>
      <ReferenciaPersonal/>
      <ReferenciaPersonal/>
      </div>
      <Containers>
          <Tittles>
          <img src="public/imgs/sena.webp" alt="" />
            <h2>EXPERIENCIA</h2>
          </Tittles>
      </Containers>
        <IconosConBarra/>
    
      


    </main>
  )
}
