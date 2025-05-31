import React from 'react';
import Header from './Components/Laytout/Header/Header';
import Footer from './Components/Laytout/Footer/Footer';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import Music from './Pages/Music/Music';
import Search from './Pages/Search/Search';
import Index from './Pages/Index/Index';

function App() {

    const routes = (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/music" element={<Music />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    )

  return (
    <Router>
        <div className="root__top-bar">
          <Header />
        </div>
        {routes}
        <Footer />
    </Router>
  );
}

export default App;
