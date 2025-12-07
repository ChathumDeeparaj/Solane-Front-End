import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes, Route } from 'react-router';
import HomePage from './pages/home/home.page';
import DashboardPage from './pages/dashboard/dashboard.page';
import RootLayout from "./layouts/root.layout";

import { store } from '@/lib/redux/store';
import { Provider } from 'react-redux';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
