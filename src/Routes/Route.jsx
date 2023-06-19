import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import MyComponent from '../pages/MyComponent/MyComponent';
import Error from '../pages/Error/Error';

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           
        ]
    },
    {
        path:"/todos",
        element:<MyComponent></MyComponent>
    },
    {
        path:'*',
        element: <Error></Error>
      }
])