import React from 'react'

import Product from './Product'

import ImgHero from '../Img/amz_hero_1500x600.jpg'

import '../Style/home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__imgHero" src={ImgHero} alt="" />

        <div className="home__row">
          <Product
            key="0"
            id="0"
            title="Laptop Lenovo V14 Intel Core i7 Gen 8th 8GB RAM 256GB SSD"
            price={18999.00}
            rating={1}
            image="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/1p/images/product-images/img_large/00085185914563-1l.jpg"
          />
          <Product
            key="1"
            id="1"
            title="Laptop Asus F509 Intel Core i7 Gen 8th 12GB RAM 1TB DD"
            price={19999.00}
            rating={2}
            image="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/1p/images/product-images/img_large/00085360895471-2l.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key="2"
            id="2"
            title='Televisor Sansui 32" Smart SMX3219/P18SM'
            price={2995.00}
            rating={3}
            image="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/4739f18a-ba50-4588-9a8b-725cc28b1a31_1.24d1fc2a6a9c16bee182064caadd0a72.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
          />
          <Product
            key="3"
            id="3"
            title="TV Makena Makena 32 Pulgadas HD Smart TV LED 32S2"
            price={2239.00}
            rating={4}
            image="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/9cbacbf9-bd60-4051-adc2-80ba6ee74fbb_1.f97ac9430c2e2825fbcc84ebd96d89fe.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
          />
          <Product
            key="4"
            id="4"
            title="TV Makena 32 Pulgadas HD LED Modelo DE315M8NNAH-YA3 Makena DE315M8NNAH-YA3"
            price={2999.00}
            rating={5}
            image="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/f5f35914-83bc-40a5-a9c1-8241e69c0eba.9b021977fe429a9d64bf44648d8dff7e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
          />
        </div>
        <div className="home__row">
          <Product
            key="5"
            id="5"
            title='Laptop Lenovo IdeaPad S340 14" Full HD, Intel Core i7-8565U 1.80GHz, 8GB, 1TB + 128GB SSD, Windows 10 Home 64-bit, Gris '
            price={19699.00}
            rating={6}
            image="https://www.cyberpuerta.mx/img/product/M/CP-LENOVO-81N7008GLM-2.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
