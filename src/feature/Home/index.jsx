import React from 'react'
import Banner from '../../widgets/banner/Banner'
import Services from '../../widgets/services/Services'
import CardsHome from '../../widgets/cards-home/CardsHome'
import Description from '../../widgets/description/Description'

const Home = () => {
  return (
    <div >
      <Banner/>
      <Services/>
      <CardsHome/>
      <Description/>
    </div>
  )
}

export default Home