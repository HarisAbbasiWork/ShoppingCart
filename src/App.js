import logo from './logo.svg';
import './App.css';
import React from 'react'
import ShopingCart from './components/ShopingCart'
class App extends React.Component {
  
render(){ 
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ShopingCart />
      

      
    </div>
  );
}
  
}

export default App;
