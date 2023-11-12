import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Loader } from './components/Loader'
import './styles/index.scss';

const Beers = lazy(() => import('./pages/index').then(({ Beers }) => ({ default: Beers })))
const Favorite = lazy(() => import('./pages/index').then(({ Favorites }) => ({ default: Favorites })))



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Beers />} path='beerholic/' />
            <Route element={<Favorite />} path='beerholic/favorite' />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
