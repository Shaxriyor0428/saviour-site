import React from 'react'
import Header from "./Header"
import Hero from './Hero'
import Services from './Services'
import Provider from './Provider'
import Mobile from './mobile'
import Doctor from './Doctor'
const Main = () => {
  return (
    <div className='main'>
        <Header/>
        <Hero/>
        <Services/>
        <Provider/>
        <Mobile/>
        <Doctor/>
    </div>
  )
}

export default Main