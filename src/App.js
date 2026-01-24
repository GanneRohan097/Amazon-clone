import { useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Products from './components/Products';
import Cart from './components/Cart';
import CartList from './components/CartList';
import ShoppingPage from './components/ShoppingPage';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
function App() {
  const [items, setItems] = useState([
    {
      logo: "https://m.media-amazon.com/images/I/21Pmr4hiY3L._AC_AA360_.jpg",
      title: "Epson Ecotank L3216 A4 All-in-one Colour Ink Tank Printer, White",
      price: 10999,
      count: 1
    },
    {
      logo: "https://m.media-amazon.com/images/I/71GmXuy7EgL._AC_AA360_.jpg",
      title: "Samsung 385 L, 2 Star, Convertible 5-in-1 Digital Inverter, with Display Frost Free Double Door Refrigerator",
      price: 42390,
      count: 1
    },
  ]);
  const [login,setLogin]=useState(false);
  useEffect(() => {
    const status = localStorage.getItem("islog") === "true";
    setLogin(status);
  }, []);
  return (
    <div>
      {login==false?(<LoginPage setLogin={setLogin}></LoginPage>):(
      <>
      <Header></Header>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/cart' element={<CartList items={items} setItems={setItems}></CartList>}></Route>
        <Route path='/more' element={<ShoppingPage items={items} setItems={setItems}></ShoppingPage>}></Route>
      </Routes>
      <button onClick={()=>{localStorage.removeItem("islog")
        setLogin(false);
      }}>logout</button>
      </>
      )
  }
    </div>
  );
}

export default App;
