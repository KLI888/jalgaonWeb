import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BusinessDetailsPage from './pages/BusinessDetailsPage';
import Account from './pages/Account';
import { UserProvider } from './context/UserContext';
import Providers from './Providers';
import AddListingPage from './pages/AddListingPage';
import AddAdvertise from './pages/AddAdvertise';
import ArticlesPage from './pages/ArticlesPage';
import Articles from './components/Releatedarticles/Articles';
import ArticleViewPage from './pages/ArticleViewPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='addListig' element={<AddListingPage />} />
      <Route path='categories/:mainCategoryId/:mainCategory' element={<CategoryPage />} />
      <Route path='productView/:productId' element={<BusinessDetailsPage />} />
      <Route path='account' element={<Account />} />
      <Route path='advertise' element={<AddAdvertise />} />
      <Route path='allarticlse' element={<ArticlesPage />} />
      <Route path='articleView/:articleId' element={<ArticleViewPage />} />

      
      <Route path='about' element={<AboutPage />} />
      <Route path='termsAndCondition' element={<TermsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Providers>
);
