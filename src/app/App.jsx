import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../widgets/Header/Header";
import AboutUs from "../widgets/Pages/AboutUs";  // Компонент "О компании"
import Favorites from "../widgets/Pages/Favorites"; // Компонент "Избранное"
import Home from "../feature/Home/InfoCar"; // Главная страница

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
