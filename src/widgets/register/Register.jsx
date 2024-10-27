// import backg from '../../shared/assets/img/image 47.png'
// import logoreg from '../../shared/assets/svg/ЛОГО.svg'
// // import RegisterForm from './RegisterForm'



// const Register = () => {
//   return (
//     <div className='relative flex justify-center items-center h-screen '>
//       <img src={backg} alt="" className='absolute' />
//       <img src={logoreg} alt="" className='relative top-[-300px] left-[310px]' />
//       <div className='relative left-[-75px] top-[55px]'>
//         {/* <RegisterForm /> */}
//       </div>
//     </div>
//   )
// }

// export default Register

import RegisterForm from "../../widgets/register/RegisterForm"

const Register = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default Register
