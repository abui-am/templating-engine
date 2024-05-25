import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './page/login';
import IndexPage from './page';
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <IndexPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
