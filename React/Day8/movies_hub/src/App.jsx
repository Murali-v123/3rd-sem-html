import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import Login from './pages/Login';
import AppLayout from './components/layout/Applayout';
import Signup from './pages/SignUp';
import Contact, { contactData } from './pages/Contact';
import './App.css';
import NotFound from './pages/NotFound';
import { getMoviesData } from './api/GetApiData';
import { getMoviesDetails} from './api/GetMoviesDetails';
import MovieDetails from './components/ui/MovieDetails';


// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/movies',
        element: <Movies/>,
        loader: getMoviesData,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails/>,
        loader: getMoviesDetails,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact/>,
        action: contactData,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup/>,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
