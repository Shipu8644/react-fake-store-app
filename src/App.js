import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
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
    fontSize: '30px',
    fontWeight: "bold"
  }

  return (
    <div>
      <input style={inputStyle} type="text" />
      <button style={buttonStyle}>Search</button>
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
          Pic={product.image} Price={product.price} count={product.rating.count} rating={product.rating.rate} ></ProductsElements>)
      }

    </div>
  );
}
function ProductsElements(props) {
  const { Category, Pic, Price, count, rating } = props;

  return (
    <div className='singleProductStyle'>
      <h2>Category: {Category}</h2>
      <img style={{ width: '200px' }} src={Pic} alt="" />
      <h3>Price: ${Price}</h3>
      <h3>Rating Count: ${count}</h3>
      <h3>Rating : ${rating}</h3>

    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const handledecrease = () => setCount(count - 1);
  const handleIncrease = () => setCount(count + 1);
  const clearValue = () => setCount(0);

  if (count < 0) {
    clearValue();
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button className='inCreDecreButtonStyle' onClick={handledecrease}>Decrease</button>
      <button className='inCreDecreButtonStyle' onClick={handleIncrease}>Increase</button>
      <button className='inCreDecreButtonStyle' onClick={clearValue}>Clear</button>

    </div>

  );
}

export default App;
