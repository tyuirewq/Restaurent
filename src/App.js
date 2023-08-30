import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import FoodMenu from './pages/FoodMenu';
import AboutUs from './pages/AboutUs';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/food" element={<FoodMenu />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;