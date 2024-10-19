import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Aboutus = lazy(() => import('./pages/Aboutus/Aboutus'));

function App() {


  const routes = createHashRouter([
    {
      path: "", element: <MainLayout />, children: [
        {
          index: true, element: <Suspense fallback={null}>
            <Home />
          </Suspense>
        },
        {
          path: "Aboutus", element: <Suspense fallback={null}>
            <Aboutus />
          </Suspense>
        },
      ]
    }
  ])



  return <RouterProvider router={routes}></RouterProvider>

}

export default App;
