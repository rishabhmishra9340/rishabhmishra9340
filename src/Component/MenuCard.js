import React from "react";
const MenuCard = ({ menuData }) => {
   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
         {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {curElem.name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
    </section>
</>
  );
};

export default MenuCard;