import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./router/route"

function App() {
 
  return (
    <>
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
