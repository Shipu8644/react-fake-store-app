import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>ClothStore</h1>
      <SearchProduct></SearchProduct>
      <ExploreProduct></ExploreProduct>
    </div>
  );
}
// inputField Sector
function SearchProduct() {
  const inputStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '30px',
    fontWeight: "bold",
    padding: "10px",
    border: '3px solid Red',
    borderRadius: '5px'

  }
  const buttonStyle = {
    padding: '5px 10px',
    marginLeft: '5px',
    borderRadius: '5px',
    fontSize: '30px'
  }

  return (
    <div>
      <input style={inputStyle} type="text" />
      <button onClick={ExploreProduct} style={buttonStyle}>Search</button>
    </div>
  );
}

function ExploreProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className='productStyle'>
      {
        products.map(product => <ProductsElements Category={product.category}
          Pic={product.image} Price={product.price} ></ProductsElements>)
      }

    </div>
  );
}
function ProductsElements(props) {
  const { Category, Pic, Price } = props;
  return (
    <div className='singleProductStyle'>
      <h2>Category: {Category}</h2>
      <img style={{ width: '200px' }} src={Pic} alt="" />
      <h3>Price: ${Price}</h3>

    </div>
  );
}

export default App;
