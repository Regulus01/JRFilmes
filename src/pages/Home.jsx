import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './Home.css'
//custom hooks
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const Home = () => {
  const { data, httpConfig } = useFetch();
  const carouselTopRate = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() =>{
    setWidth(carouselTopRate.current?.scrollWidth - carouselTopRate.current?.offsetWidth)
  }, [])

  useEffect(() => {
    httpConfig("movie/top_rated?language=pt-br&page=1", "GET");
  }, [])

  return (
    <>
      <div className="titulo">
        <motion.h1 animate={{ x: 200 }}> Melhores avaliados </motion.h1>
      </div>
      <div className='top'>
        <motion.div ref={carouselTopRate}
          className="toprated-carousel" >
          <motion.div className='inner'
            drag="x"
            dragConstraints={{right:0, left:-width}}
            initial={{x: 100}}
            animate={{x: 0}}
            transition={{duration: 0.8}}
          >
            {data && data.results.map((movie) => (
              <Card className='item' key={movie.id}
                title={movie.title}
                rate={movie.vote_average}
                lancamento={movie.release_date}
                capa={movie.backdrop_path} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>

  )
}

export default Home