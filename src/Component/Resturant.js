import React , {useState} from "react";
import "./Style.css"
import Menu from './MenuApi.js';
import MenuCard from "./MenuCard.js";

const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }
  return(
    <>
    <nav className="navbar">
      <div className="btn-group">
         <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>BreakFast</button>
         <button className="btn-group__item"onClick={()=>filterItem("lunch")}>Lunch</button>
         <button className="btn-group__item"onClick={()=>filterItem("evening")}>Evening</button>
         <button className="btn-group__item"onClick={()=>filterItem("dinner")}>Dinner</button>
         <button className="btn-group__item"onClick={()=>filterItem("all")}>All</button>
      </div>

    </nav>
    <MenuCard menuData={menuData}/>
    </>
  );
};
export default Resturant;