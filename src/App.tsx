import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import WorkList from './page/WorkList';
import Jobs from './page/Jobs';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<WorkList />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
