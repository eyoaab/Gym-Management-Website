import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/home-page/main-page'
import BlogPage from './pages/blogs-page/blogs-page';
import AboutPage from './pages/about-page/about-page';
import ProductPage from './pages/products/product-page';
function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/blogs" element={<BlogPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/products" element={<ProductPage />} />
        </Routes>
      </Router>

     
    </div>
  );
}

export default App;
