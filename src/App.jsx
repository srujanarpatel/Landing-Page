import React from 'react';
import { Navbar } from './components/organisms/Navbar';
import { Hero } from './components/organisms/Hero';
import { MovieRow } from './components/organisms/MovieRow';
import { Footer } from './components/organisms/Footer';
import './styles/global.css'; // Ensure global styles are applied if not index.css? import index.css ensures variables.

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="content-rows" style={{ position: 'relative', zIndex: 10, marginTop: '-10vh' }}>
        <MovieRow title="Popular on Platform" />
        <MovieRow title="Continue Watching" />
        <MovieRow title="Watch It Again" />
        <MovieRow title="Action Movies" />
        <MovieRow title="Drama Series" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
