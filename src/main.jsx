import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './app/style/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  
)

// value={value}
// onChange={handleChange}
// aria-label="basic tabs example"
// TabIndicatorProps={{
//   style: { backgroundColor: 'blue' }, // Полоска синяя
// }}


{/* <div className=' w-max h-max'>
<h1 className=' text-[#FFF] text-3xl'>Audi  2016 года за ~ 175,900 сом</h1>
</div>  */}