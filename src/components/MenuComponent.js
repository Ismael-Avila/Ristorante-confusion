import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({dish, selectedDishFunction}){
  return(
    <Card key={dish.id} onClick={()=>selectedDishFunction(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>

  );
}

/*
  In this function you're receiving data from MainComponent.js when this function is
  called.
*/
const Menu = (props) =>{
  //Main function to render
  //The third part of a component: Return a part of the DOM

  console.log("Menu Component render invoked");
  //<RenderMenuItem dish={dish} selectedDish={props.selected}/>
  //<RenderMenuItem tranfered_data passed_function_from MainComponent/>
  const menu = props.dishes.map((dish) => {
    return (
      <div  className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} selectedDishFunction={props.selected}/>
      </div>
    );
  });



  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );


}

export default Menu;