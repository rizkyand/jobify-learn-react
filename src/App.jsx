import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomeLayout, Register, Login, DashboarLayout, Landing, Error, AnotherLanding, AnotherRegister} from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element : <HomeLayout/>,
    errorElement : <Error/>,
    children : [
      {
        index : true,
        element : <AnotherLanding/>
      },
      {
        path: 'home',
        element : <Landing/>,
      },
      {
        path: 'reg',
        element : <Register/>,
      },
      {
        path: 'login',
        element : <Login/>,
      },
      {
        path: 'register',
        element : <AnotherRegister/>,
      },
      {
        path: 'dashboard',
        element : <DashboarLayout/>,
      }
    ]
  }

]);
const App = ()=> {
  return <RouterProvider router={router}/>;
};
export default App;
