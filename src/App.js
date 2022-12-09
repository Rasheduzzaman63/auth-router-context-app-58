import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Register from './components/Register';
import Main from './layout/Main';
import PrivatieRoute from './routes/PrivatieRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/orders',
          element: <PrivatieRoute><Orders></Orders></PrivatieRoute>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
