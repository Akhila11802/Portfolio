import React from 'react';
import {portfolio, mlp, jsp, mern, sem} from '../../data';

import {powerBi} from '../../data';
import '../../index.css';

import PortfolioItem from '../../components/PortfolioItem';
import "./portfolio.css"
const Portfolio = () => {
  
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Portfolio</span></h2>

      <h3 className="section__subtitle subtitle__center">React Projects</h3>

      <div className="portfolio__container container grid">
        {portfolio.map((item)=>{
              return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
      <div className='separator'></div>

      <h3 className="section__subtitle subtitle__center">MERN Stack Projects</h3>

      <div className="portfolio__container container grid">
        {mern.map((item)=>{
              return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
      <div className='separator'></div>



      <h3 className="section__subtitle subtitle__center">Javascript Projects</h3>

      <div className="portfolio__container container grid">
        {jsp.map((item)=>{
              return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
      <div className='separator'></div>

      <h3 className="section__subtitle subtitle__center">ML Projects</h3>

      <div className="portfolio__container container grid">
        {mlp.map((item)=>{
              return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
      <div className='separator'></div>

      <h3 className="section__subtitle subtitle__center">PowerBI Projects</h3>
      <div className="portfolio__container container grid">
        {powerBi.map((item)=>{
              return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>

      <div className='separator'></div>

      <h3 className="section__subtitle subtitle__center">Curricular Projects</h3>
      <div className="portfolio__container container grid">
        {sem.map((item)=>{
              return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
    </section>
    )
}

export default Portfolio