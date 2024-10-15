import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));

function App() {


  const routes = createBrowserRouter([
    {
      path: "", element: <MainLayout />, children: [{
        index: true, element: <Suspense fallback={null}>
          <Home />
        </Suspense>
      },
      ]
    }
  ])



  return <RouterProvider router={routes}></RouterProvider>

}

export default App;
