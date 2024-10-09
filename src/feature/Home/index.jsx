import React from 'react'
import Banner from '../../widgets/banner/Banner'
import Services from '../../widgets/services/Services'
import CardsHome from '../../widgets/cards-home/CardsHome'
import Description from '../../widgets/description/Description'
import Commentaries from '../../widgets/commentaries/Commentaries'

const Home = () => {
  return (
    <div >
      <Banner/>
      <Services/>
      <CardsHome/>
      <Description/>
      <Commentaries/>
    </div>
  )
}

export default Home