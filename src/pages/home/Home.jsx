import React from 'react'
import Profile from '../../assets/home1.jpg'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import "./home.css"
import '../../index.css';

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className='home__data'>
          <h1 className='home__title'><span>I'm Akhila Anilkumar.</span> <br/>Web Designer
          </h1>
          <p className='home__description'>
          I am a passionate Web Developer and competitive coder with a strong interest in AI and ML.
          Skilled in Problem Solving, C++, Java, and Python, I strive to stay updated on the latest
          advancements.I create dynamic websites using MERN Stack.
          </p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home