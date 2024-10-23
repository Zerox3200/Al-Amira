import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Aboutus = lazy(() => import('./pages/Aboutus/Aboutus'));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Jobs = lazy(() => import("./pages/Jobs/Jobs"));

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
        {
          path: 'Contact', element: <Suspense fallback={null}>
            <Contact />
          </Suspense>
        }, {
          path: "Jobs", element: <Suspense fallback={null}>
            <Jobs />
          </Suspense>
        }
      ]
    }
  ])



  return <RouterProvider router={routes}></RouterProvider>

}

export default App;
