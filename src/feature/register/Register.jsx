import backg from '../../shared/assets/img/image 47.png'
import logoreg from '../../shared/assets/svg/ЛОГО.svg'

const Register = () => {
  return (
    <div className='relative flex justify-center items-center h-screen overflow-hidden'>
      <img src={backg} alt="" className='absolute ' />
      <img src={logoreg} alt="" className='relative top-[-300px] object-cover' />
    </div>
  )
}

export default Register
