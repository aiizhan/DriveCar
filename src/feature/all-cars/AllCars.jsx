import React from 'react'
import Container from '../../shared/helpers/Container'
import AllHeader from '../../widgets/all-cars/AllHeader'
import AllBaner from '../../widgets/all-cars/AllBaner'
import Filter from '../../widgets/all-cars/Filter'
import Cards from '../../widgets/all-cars/Cards'
import Bacg from '../../shared/assets/img/image 8.png'
import Footer from '../../widgets/Footer/Footer'

const AllCars = () => {
    return (

        <div className='text-white'>
            <div className="header bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Bacg})` }}>
                <Container>
                    <AllHeader />
                </Container>
                <div className="modal-banner absolute top-0 w-full h-[90px] bg-[linear-gradient(270.77deg,#0A0A0B_-30.17%,rgba(2,2,2,0)_54.39%,#0A0A0B_128.85%)]">
                </div>
            </div>
            <div className="banner">
                <AllBaner />
            </div>
            <Container>
                <section className='flex gap-[120px]'>
                    <div className="filter">
                        <Filter />
                    </div>
                    <div className="card">
                        <Cards />
                    </div>
                </section>
            </Container>
            <Footer/>
        </div>
    )
}

export default AllCars