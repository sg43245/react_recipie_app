import "./App.css";
import { useState, useEffect} from "react";
import axios from 'axios';
import DishMenu from "./MyComponents/DishMenu";
import Nav from "./MyComponents/Nav";
import {BrowserRouter as Router,Link} from 'react-router-dom';

function App() {
  const APP_ID = "607bd228";
  const APP_KEY = "79c5167c65d53dc9666e9f3dc8c89c80";

  const [dish, setdish] = useState('');
  const [data, setdata] = useState([]);
  const [searchDish,setsearchDish] = useState('paneer');

  useEffect(() => {

    const getRecipes = async ()=>{
      try{
        const res = await axios.get(`https://api.edamam.com/search?q=${searchDish}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        setdata(res.data.hits);
        // console.log(res.data);
      }catch(err){
        console.log(err);
      }
    }
  
    getRecipes();
    

  }, [searchDish])


  const submitIt = (e)=>{
    e.preventDefault();
    setsearchDish(dish);
    // console.log('Submitted');
    setdish('');
  }



function modalShow(ind){
    document.getElementById(ind).setAttribute("style", "visibility: visible;");

// document.querySelector('#cross').addEventListener('click',()=>{
//     modal.setAttribute("style", "visibility: hidden;");
//     document.getElementById('cross').setAttribute("style", "display: none;");
// });
}
function deleteShow(ind){
  document.getElementById('cross').setAttribute("style", "display: none;");
  document.getElementById(ind).setAttribute("style", "visibility: hidden;");
  
}



  return (
    <Router>
      <Nav ></Nav>
      <div className="container2">
        <form className="hero"  onSubmit={submitIt}>
            <input type="search" id="dishName" placeholder="Search Reipies" name="search"
           value={dish}
           onChange={(e)=>{setdish(e.target.value)} }/>
            <button className="search-btn" type="submit">Search It!</button>
        </form>
        <div className="menu">
        {data.map((r,index)=>(
        <DishMenu modalShow={modalShow} deleteShow={deleteShow} imageLink={r.recipe.image} key={index} ind={index} label={r.recipe.label} ingredients={r.recipe.ingredients} calorie={r.recipe.calories} />
      ))}
      </div>
    </div>
    <div className="footer">
      <Link href="https://github.com/sg43245"><h4>Created By | Shubham Gupta</h4></Link>
    </div>
    <div className="modalDisplay">
   
   </div>
   </Router>
);
}
  

export default App;
