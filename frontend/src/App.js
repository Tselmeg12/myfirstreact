import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
          <button onclick="openMenu()">
              &#9776;
          </button>
          <a href="index.amazon.html">Amazon</a>
      </div>
      <div className="header-links">
          <a href="card.html">Cart</a>
          <a href="signin">Sign in</a>
      </div>
     </header>  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
     <aside className="sidebar">
         <h3>Shopping Categories</h3>
         <button className="sidebar-close-button"onclick="closeMenu()">x</button>
         <ul>
             <li>
                 <a href="index.html">Laptop</a>
             </li>

             <li>
                 <a href="index.html">Desktop</a> 
             </li>
         </ul>
     </aside>
        <main className="main">
            <div className="content"></div>
              <ul className="products">
               <li>
                 <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">Predator Gaming Laptop</a>
                  </div>
                  <div className="product-brand">Acer</div>
                  <div className="product-price">1350$</div>
                  <div className="product-rating">4.5$ Starts(10 Reviews)</div>
                 </div>
              </li>
              <li>
                 <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">Predator Gaming Laptop</a>
                  </div>
                  <div className="product-brand">Acer</div>
                  <div className="product-price">1350$</div>
                  <div className="product-rating">4.5$ Starts(10 Reviews)</div>
                 </div>
              </li>
              <li>
                 <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">Predator Gaming Laptop</a>
                  </div>
                  <div className="product-brand">Acer</div>
                  <div className="product-price">1350$</div>
                  <div className="product-rating">4.5$ Starts(10 Reviews)</div>
                 </div>
              </li>
              <li>
                 <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">Predator Gaming Laptop</a>
                  </div>
                  <div className="product-brand">Acer</div>
                  <div className="product-price">1350$</div>
                  <div className="product-rating">4.5$ Starts(10 Reviews)</div>
                 </div>
              </li>
              <li>
                 <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">Predator Gaming Laptop</a>
    
                 </div>
                  <div className="product-brand">Acer</div>
                  <div className="product-price">1350$</div>
                  <div className="product-rating">4.5$ Starts(10 Reviews)</div>
                 </div>
              </li>
              <li>
                 <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">Predator Gaming Laptop</a>
                  </div>
                  <div className="product-brand">Acer</div>
                  <div className="product-price">1350$</div>
                  <div className="product-rating">4.5$ Starts(10 Reviews)</div>
                 </div>
              </li>
              
             </ul>


      </main>
     <footer className="footer">
         All right reserved
     </footer>
 </div>
  );
}

export default App;
