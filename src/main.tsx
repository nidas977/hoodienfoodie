
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import RedirectHandler from './components/RedirectHandler.tsx'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RedirectHandler>
      <App />
    </RedirectHandler>
  </BrowserRouter>
);
