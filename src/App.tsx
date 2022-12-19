import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './page/Home';

import Header from './components/layout/Header';
import WorkList from './page/WorkList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<WorkList />} />
      </Routes>
    </Router>
  );
}

export default App;
