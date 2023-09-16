
import logo from './logo.svg';
import './App.css';
import { OrderSummary } from './Components/OrderSummary';
import Cards from './Components/Cards'
import React,{useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { NoMatch } from './Components/NoMatch';
import { Products } from './Components/Products';
import { Featured } from './Components/FeaturedProducts';
import { NewProducts } from './Components/NewProducts';
import Users from './Components/Users';
import Admin from './Components/Admin';
import UserID from './Components/UserID';
import UserDetails from './Components/UserDetails';
import Profile from './Components/Profile';
// import About from './Components/About';
const LazyAbout = React.lazy(() => import('./Components/About'));

function App() {

// const [age , setAge] = useState(22);


  return (

    <div className="App">
     {/* <button onClick={() => {setAge(age - 1)} }>Remove</button> {age} <button onClick={() => {setAge(age + 1)} }>Add</button> */}
      
     <Routes>
        <Route path='/' element={<Login />}></Route>

        <Route path='cards' element={<Cards/>}></Route>

        <Route path='cards/order-summary' element={<OrderSummary/>}></Route>

        <Route path='cards/products' element={<Products/>}>
          <Route index element={<Featured/>}></Route>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='cards/users' element={<Users/>}>
          <Route path='admin' element={<Admin/>}/>
          <Route path=':userid' element={<UserDetails/>}/>
        </Route>
        <Route path='cards/about' element={
        <React.Suspense fallback='Loading..'>
          <LazyAbout/>
        </React.Suspense>
        }/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NoMatch/>}></Route>
     </Routes>
    
                
    </div>
  );
}

export default App;
