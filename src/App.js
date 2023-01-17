import { Link } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      <h1>main page</h1>
      <Link to={'/product/'} href='#' class='link'>Go to product page</Link>
      <Link to={'/post-product/'} href='#' class='link'>Go to add product page</Link>
    </div>
  );
}