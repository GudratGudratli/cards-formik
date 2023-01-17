import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Product from '../Product';
import Card from '../Card';
import PostProduct from '../PostProduct';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      
    },
  
    {
      path: "/product/",
      element: <Product/>,
      
    },  

    {
        path: "/product/:id",
        element: <Card/>,
        
    },  

    {
        path: "/post-product",
        element: <PostProduct/>,
        
    }, 
  ]);
export default router