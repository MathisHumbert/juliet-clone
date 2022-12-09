import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Home from './page/Home';

import Header from './components/layout/Header';

const lenis = new Lenis({
  // @ts-ignore
  lerp: 0.01,
  smooth: true,
  direction: 'vertical',
});

function raf(time: any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
