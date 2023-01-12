import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Community from './pages/Community';
import About from './pages/About';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Transition from './components/layout/Transition';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<WorkList />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/community' element={<Community />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      <Transition />
    </Router>
  );
}

export default App;
