import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomeLayout, Register, Login, DashboarLayout, Landing} from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element : <HomeLayout/>,
    children : [
      {
        index : true,
        element : <Landing/>
      },
      {
        path: 'register',
        element : <Register/>,
      },
      {
        path: 'login',
        element : <Login/>,
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
  // (
  //     <h1>Jobify App</h1>
  // )
};
export default App;
