import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import WorkList from './page/WorkList';
import Jobs from './page/Jobs';
import Contact from './page/Contact';
import Community from './page/Community';

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
      </Routes>
      <Footer />
      <Transition />
    </Router>
  );
}

export default App;
