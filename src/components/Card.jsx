import React from 'react'
import "./Card.css"
import { FaStar } from 'react-icons/fa'

const Card = ({title, rate, lancamento, capa}) => {
  const urlBaseCapa = "https://www.themoviedb.org/t/p/w220_and_h330_face/"
  return (
    <div className='row'>
            <img className='capa' src={urlBaseCapa + capa}/>
            <h2>{title}</h2>
            <p>{lancamento}</p>
            <p className='star'> <FaStar /> {rate} </p>
            
    </div>
  )
}

export default Card