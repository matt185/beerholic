import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Loader } from './components/Loader'
import './styles/index.scss';

const Beers = lazy(() => import('./pages/index').then(({ Beers }) => ({ default: Beers })))
const Favorite = lazy(() => import('./pages/index').then(({ Favorites }) => ({ default: Favorites })))



function App() {
  return (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
          <Route element={<Beers />} path='/' />
          <Route element={<Favorite />} path='/favorite' />
          </Routes>
        </Suspense>
    </Layout>
  );
}

export default App;
