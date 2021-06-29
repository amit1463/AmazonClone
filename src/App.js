import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from "./Navbar"
import Cart from './Cart';
import Home from './Home';
import {useState,useEffect} from 'react';
import {db} from "./Firebase"
function App() {
  const [cartItems,setCartItems]=useState([])
  const getCartItems=()=>{
    db.collection("CartItems").onSnapshot((snapshot)=>{
      // const tempItems=[]
      const tempItems=snapshot.docs.map((doc)=>(
        {
        id:doc.id,
        product:doc.data()
      }))
      setCartItems(tempItems)
    })
  }
  useEffect(()=>{
    getCartItems();
  },[])
  // console.log(cartItems)
  return (
    <Router>
        <Navbar cartItems={cartItems}/>
        <Switch>
        <Route exact path="/amazon-clone">
          <Home/>
        </Route>
        <Route path="/cart">
            <Cart cartItems={cartItems}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
