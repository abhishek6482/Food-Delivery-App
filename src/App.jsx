import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Layout }from './Layout/Layout';
import {Home} from './Components/Home';
import {Menu} from './Components/Menu';
import{ TrackOrder }from './Components/TrackOrder'; 
import './App.css';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Home />,  
                    },
                    {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "trackorder",
                        element: <TrackOrder />,
            },
                ]
                
    }
    
]);

const App = () => {
    return (
       <RouterProvider router={router} ></RouterProvider>
    );
};

export default App;

 
