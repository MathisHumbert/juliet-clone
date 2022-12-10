import ReactDOM from 'react-dom/client';

import { PageProvider } from './context/PageContext';
import App from './App';

import './styles/font.css';
import './styles/base.css';

ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
  <PageProvider>
    <App />
  </PageProvider>
);
