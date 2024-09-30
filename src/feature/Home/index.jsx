import React from 'react'
import Container from '../../shared/helpers/Container'
import Banner from '../../shared/assets/img/image 8.png'

const Home = () => {
  return (
    <div >
      <div className="banner absolute w-full h-4/5 top-0 z-1 border border-yellow-500">
        <div
          className="img-banner bg-cover bg-center w-full h-3/4 border-red-500"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${Banner})`
          }}
        >

        </div>
        <div className="modal-banner border border-blue-500 absolute top-0 w-full h-full bg-[linear-gradient(270.77deg,#0A0A0B_-30.17%,rgba(2,2,2,0)_54.39%,#0A0A0B_128.85%)]">
          <Container>
            <div className="text">
              <h1 className='text-center mt-56 text-5xl text-white'>KEREZBEOV ARSEN</h1>
              <p className='text-center mt-16 text-2xl text-white'>KEREZBEOV ARSEN</p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Home