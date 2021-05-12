import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './dishDetailComponent';

class Menu extends Component {

    /*Here is where you receive the data that is passed to App.js*/

    //Part 1: Contructor and the data you receive
    constructor(props) {
      super(props);
      console.log("Menu Component constructor invoked")

    }

    componentDidMount(){
      console.log("Menu Component componentDidMount invoked")
    }


    /*Functions to change parameters or states*/

      
    //Function to render 1
    renderDish(dish){
      return(
        <DishDetail dish ={dish}/>
      );
    }


    //Main function to render
    //The third part of a component: Return a part of the DOM
    render() {
      console.log("Menu Component render invoked");
      const menu = this.props.dishes.map((dish) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <Card key={dish.id} onClick={()=>this.props.selected(dish.id)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
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
}

export default Menu;