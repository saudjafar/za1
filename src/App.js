import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  </Router>
  );
}

export default App;
